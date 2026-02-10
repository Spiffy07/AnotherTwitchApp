
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

using AnotherTwitchApp.DbContexts;
using Serilog;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Primitives;
using System.Linq;

namespace Auth.Models
{
    [Index(nameof(email), IsUnique = true)]
    [Index(nameof(username), IsUnique = true)]
    public class Identity
    {
        [Key]
        [Required]
        public string email { get; set; } = string.Empty;
        [Required]
        public string username { get; set; } = string.Empty;
        [Required]
        public string password { get; set; } = string.Empty;
    }

    public class LoginRequest
    {
        public string email { get; set; } = string.Empty;
        public string password { get; set; } = string.Empty;
    }


    public class IdentityService(TwitchDbContext _db, IHttpClientFactory _httpClientFactory)
    {
        public async Task<Identity?> GetIdentityFromDbAsync(string email = "", string username = "")
        {
            Identity temp = new Identity { email = email, username = username, password = "" };

            return await _db.Identity.AsNoTracking()
                .FirstOrDefaultAsync(p => p.username.ToLower() == temp.username.ToLower() || p.email == temp.email);
        }

        public async Task<List<Identity>> GetAllIdentitiesAsync()
        {
            return await _db.Identity.ToListAsync();
        }

        public async Task<IResult> AddIdentityToDbAsync(Identity identity)
        {
            Identity? getResult = await GetIdentityFromDbAsync(identity.email, identity.username);
            if (getResult != null)
            {
                if (getResult.email == identity.email)
                    return Results.Conflict($"{identity.email} is already exists.");
                else
                    return Results.Conflict($"{identity.username} is already exists.");
            }

            try
            {
                var httpClient = _httpClientFactory.CreateClient();

                var registerNewUser = new Dictionary<string, string>
                {
                    { "email", identity.email },
                    { "username", identity.username },
                    { "password", identity.password }
                };

                var httpResponse = await httpClient.PostAsJsonAsync("https://localhost:44446/api/register", registerNewUser);

                var responseString = await httpResponse.Content.ReadAsStringAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error during HTTP request: {ex.Message}");
            }

            // check for password strength etc.

            // TODO: Here you would normally hash the password before storing it

            await _db.Identity.AddAsync(identity);
            await _db.SaveChangesAsync();


            return Results.Created($"/api/Identity/{identity.username}", identity);
        }

        public async Task<IResult> LoginUserAsync(string email, string password, [FromQuery] bool useCookies, HttpContext httpContext)
        {
            //Log.Information("Hello for login {Username}", identity.username);

            Identity? getResult = await GetIdentityFromDbAsync(email: email);
            if (getResult == null)
            {
                return Results.NotFound("User not found.");
            }

            if (getResult.password != password)
            {
                return Results.Unauthorized();
            }

            try
            {
                var httpClient = _httpClientFactory.CreateClient();

                var loginUser = new Dictionary<string, string>
                {
                    { "email", getResult.email },
                    { "username", getResult.username },  
                    { "password", getResult.password }
                };

                // var builder = new UriBuilder("https://localhost:44446/api/login");
                // var query = HttpUtility.ParseQueryString("");
                // query["useCookies"] = useCookies.ToString().ToLower();
                // builder.Query = query.ToString();
                // string url = builder.ToString();
                
                var httpResponse = await httpClient.PostAsJsonAsync($"https://localhost:44446/api/login?useCookies={useCookies.ToString().ToLower()}", loginUser);
                var responseString = await httpResponse.Content.ReadAsStringAsync();
                Log.Information("Login response: {Response}", responseString);
                
                if (!httpResponse.IsSuccessStatusCode)
                {
                    Log.Error("Login failed with status code: {StatusCode}", httpResponse.StatusCode);
                    return Results.InternalServerError(responseString);
                }

                // httpContext.Response.Headers.Add("Set-Cookie", httpResponse.Headers.GetValues("Set-Cookie").ToArray());
                var setCookies = httpResponse.Headers.TryGetValues("Set-Cookie", out var values) ? values : Enumerable.Empty<string>();

                foreach (var cookie in setCookies)
                {
                    httpContext.Response.Headers.Append("Set-Cookie", cookie);
                }
            }
            catch (Exception ex)
            {
                Log.Error($"Error during HTTP request: {ex.Message}");
                return Results.InternalServerError("An error occurred during login.");
            }

            return Results.Ok("Login successful.");

        }
    }
}