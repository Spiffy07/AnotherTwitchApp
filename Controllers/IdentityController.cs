
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;

using Auth.Models;

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
        return await _identityService.AddIdentityToDbAsync(identity);
    }
    
}

