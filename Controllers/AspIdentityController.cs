

using Auth.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Serilog;


namespace AnotherTwitchApp.Controllers;

[ApiController, Route("api/[controller]")]
public class AspIdentityController(AspIdentityService aspIdentityService) : ControllerBase
{
    [HttpGet]
    public async Task<List<MyIdentity>> Get()
    {
        return await aspIdentityService.GetAllAspIdentitiesAsync();
    }

    [HttpPost("register")]
    public async Task<IResult> Create([FromBody] FormIdentity newIdentity)
    {
        var result = await aspIdentityService.CreateIdentityAsync(newIdentity);

        if (!result.Succeeded)
        {
            // Log the errors for debugging purposes
            foreach (var error in result.Errors)
            {
                Log.Error("Error creating user: {ErrorDescription}", error.Description);
            }
            return Results.InternalServerError("Failed to create user. Please check the logs for more details.");
        }
        return Results.Ok("User created successfully.");
    }
}