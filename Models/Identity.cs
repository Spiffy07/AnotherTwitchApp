
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

using AnotherTwitchApp.DbContexts;

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


    public class IdentityService(TwitchDbContext _db, IHttpClientFactory _httpClientFactory)
    {
        public async Task<Identity?> GetIdentityFromDbAsync(Identity identity)
        {
            return await _db.Identity.AsNoTracking()
                .FirstOrDefaultAsync(p => p.username.ToLower() == identity.username.ToLower() || p.email == identity.email);
        }

        public async Task<List<Identity>> GetAllIdentitiesAsync()
        {
            return await _db.Identity.ToListAsync();
        }

        public async Task<IResult> AddIdentityToDbAsync(Identity identity)
        {
            Identity? getResult = await GetIdentityFromDbAsync(identity);
            if (getResult != null)
            {
                if (getResult.email == identity.email)
                    return Results.Conflict($"{identity.email} is already exists.");
                else
                    return Results.Conflict($"{identity.username} is already exists.");
            }

            // check for password strength etc.

            // TODO: Here you would normally hash the password before storing it



            await _db.Identity.AddAsync(identity);   // This doesnt post to the correct endpoint to get a cookie
            await _db.SaveChangesAsync();

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

            return Results.Created($"/api/Identity/{identity.username}", identity);
        }
    }
}