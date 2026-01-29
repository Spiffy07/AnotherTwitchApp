
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;

using Auth.Models;

namespace AnotherTwitchApp.Controllers;

[ApiController]
[Route("[controller]")]
public class IdentityController(IdentityService _identityService) : ControllerBase
{
    [HttpGet]
    public async Task<IResult> GetAll()
    {
        // return await _identityService.GetAllIdentities();
        // return Results.Ok("Not implemented");

        return await _identityService.RegisterIdentity(new Identity { UserName = "test", Password = "password" });
    }
    
    
    // [HttpPost("register")]
    // public async Task<IResult> RegisterUser([FromBody] Identity identity)
    // {
    //     return await _identityService.RegisterIdentity(identity);
    // }
}

