
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;

using Auth.Models;
using Serilog;

namespace AnotherTwitchApp.Controllers;

[ApiController]
[Route("api/[controller]")]
public class IdentityController(IdentityService _identityService) : ControllerBase
{
    [HttpGet]
    public async Task<List<Identity>> GetAllAsync()
    {
        return await _identityService.GetAllIdentitiesAsync();
    }
    [HttpPost("register")]
    public async Task<IResult> RegisterNewUser([FromBody] Identity identity)
    {
        await _identityService.AddIdentityToDbAsync(identity);
        return await _identityService.LoginUserAsync(identity.email, identity.password, true, HttpContext);
            // TODO: Redudant checking of user Existence due to creating a new user.
    }
    
    [HttpPost("login")]
    public async Task<IResult> LoginUser([FromBody] MyLoginRequest login, [FromQuery] bool useCookies = true)
    {
        //TODO: Add a function to check if the user is already logged in, if so, return a message instead of logging in again.
        //TODO: return correct status code for incorrect password or non-existing user.
        return await _identityService.LoginUserAsync(login.email, login.password, useCookies, HttpContext);
    }
}

