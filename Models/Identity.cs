
using AnotherTwitchApp.DbContexts;

namespace Auth.Models
{
    public class Identity
    {
        public string Email { get; set; } = string.Empty;
        public string UserName { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }


    public class IdentityService(TwitchDbContext _db)
    {
        public async Task<IResult> RegisterIdentityToDb(Identity identity)
        {
            // Registration logic here pretending to save to the database
            return Results.Ok();
        }
    }
}