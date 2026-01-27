
using AnotherTwitchApp.DbContexts;

namespace Auth.Models
{
    public class Identity
    {
        public string UserName { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }


    public class IdentityService(TwitchDbContext _db)
    {
        public async Task<IResult> RegisterIdentity(Identity identity)
        {
            // Registration logic here
            return Results.Ok();
        }
    }
}