
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;

using Auth.Models;

namespace AnotherTwitchApp.Controllers;

[ApiController]
[Route("api/[controller]")]
public class IdentityController(IdentityService _identityService) : ControllerBase
{
    [HttpPost("{username})")]
    public async Task<IResult> RegisterNewUser([FromBody] Identity identity)
    {
        // return await _identityService.GetAllIdentities();
        // return Results.Ok("Not implemented");

        return await _identityService.RegisterIdentityToDb(identity);
    }
    
    
    // [HttpPost("register")]
    // public async Task<IResult> RegisterUser([FromBody] Identity identity)
    // {
    //     return await _identityService.RegisterIdentity(identity);
    // }
}

