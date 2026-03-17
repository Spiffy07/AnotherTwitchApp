
using System.Security.Claims;
using AnotherTwitchApp.DbContexts;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace Auth.Models
{
    public class FormIdentity
    {
        public string email { get; set; } = string.Empty;
        public string username { get; set; } = string.Empty;
        public string password { get; set; } = string.Empty;
    }

    public class MyIdentity : IdentityUser
    {
        public string MyTestingProperty { get; set; } = string.Empty;
    }

    public class DataTransferObject
    {
        public string username { get; set; } = string.Empty;
    }

    public class AspIdentityService
    {
        private UserManager<MyIdentity> _userManager;
        private SignInManager<MyIdentity> _signInManager;
        private RoleManager<IdentityRole> _roleManager;

        public AspIdentityService(UserManager<MyIdentity> userManager,
        SignInManager<MyIdentity> signInManager,
        RoleManager<IdentityRole> roleManager)
        {
            this._userManager = userManager;
            this._signInManager = signInManager;
            this._roleManager = roleManager;

            try
            {
                if (RoleExistsAsync("Admin").Result == false)
                {
                    roleManager.CreateAsync(new IdentityRole("Admin")).Wait();
                }

                if (RoleExistsAsync("User").Result == false)
                {
                    roleManager.CreateAsync(new IdentityRole("User")).Wait();
                }
            }
            catch (Exception ex)
            {
                // Log the exception for debugging purposes
                Serilog.Log.Error(ex, "An error occurred while creating the 'User' role.");
            }
        }

        private async Task<bool> RoleExistsAsync(string roleName)
        {
            return await _roleManager.RoleExistsAsync(roleName);
        }

        public async Task<List<MyIdentity>> GetAllAspIdentitiesAsync()
        {
            return await _userManager.Users.ToListAsync();
        }

        public async Task<MyIdentity?> GetAspIdentityAsync(FormIdentity identity)
        {
            return await _userManager.FindByNameAsync(identity.username);
        }

        public async Task<IdentityResult> CreateIdentityAsync(FormIdentity newIdentity)
        {
            if (string.IsNullOrWhiteSpace(newIdentity.username))
                return IdentityResult.Failed(new IdentityError { Description = "Username is required." });
            
            if (string.IsNullOrWhiteSpace(newIdentity.email))
                return IdentityResult.Failed(new IdentityError { Description = "Email is required." });
            
            if (string.IsNullOrWhiteSpace(newIdentity.password))
                return IdentityResult.Failed(new IdentityError { Description = "Password is required." });
            

            var AspIdentity = new MyIdentity
            {
                UserName = newIdentity.username,  // this breaks using the /login enpoint, it compares email to username
                Email = newIdentity.email,
                MyTestingProperty = "This is a test property"
            };

            var createResult = await _userManager.CreateAsync(AspIdentity, newIdentity.password);

            if (!createResult.Succeeded)
            {
                return IdentityResult.Failed(new IdentityError { Description = "Failed to create user" }); // Return the failure result if user creation failed
            }

            var roleResult = await _userManager.AddToRoleAsync(AspIdentity, "User");
            if (!roleResult.Succeeded)
            {
                // If role assignment fails, delete the created user to maintain consistency
                await _userManager.DeleteAsync(AspIdentity);
                return IdentityResult.Failed(new IdentityError { Description = "Failed to assign role to user." });
            }

            return IdentityResult.Success;
        }

        public async Task<SignInResult> LoginAsync(FormIdentity loginIdentity)
        {
            var aspIdentity = await GetAspIdentityAsync(loginIdentity);

            if (aspIdentity == null || aspIdentity.UserName == null)
            {
                return SignInResult.Failed;
            }

            return await _signInManager.PasswordSignInAsync(
                aspIdentity.UserName,
                loginIdentity.password,
                isPersistent: false,    // set to false for testing, change to true for production
                lockoutOnFailure: false // set to false for testing, change to true for production
            );
        }


    }

    public class MyCustomClaimsFactory : UserClaimsPrincipalFactory<MyIdentity>
    {
        public MyCustomClaimsFactory(UserManager<MyIdentity> userManager, IOptions<IdentityOptions> options)
            : base(userManager, options)
        {
        }

        protected override async Task<ClaimsIdentity> GenerateClaimsAsync(MyIdentity user)
        {
            var identity = await base.GenerateClaimsAsync(user);
            identity.AddClaim(new Claim("LoggedIn", "true"));
            return identity;
        }
    }
}