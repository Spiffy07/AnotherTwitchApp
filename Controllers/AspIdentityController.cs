

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
    public async Task<IResult> CreateAsync([FromBody] FormIdentity newIdentity)
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

    [HttpPost("login")]
    public async Task<IResult> LoginAsync([FromBody] FormIdentity loginIdentity)
    {
        switch(await aspIdentityService.LoginAsync(loginIdentity))
        {
            case Microsoft.AspNetCore.Identity.SignInResult { Succeeded: true }:
                return Results.Ok("Login successful.");
            case Microsoft.AspNetCore.Identity.SignInResult { IsLockedOut: true }:
                return Results.Problem("Your account is locked. Please try again later.", statusCode: 401);
            case Microsoft.AspNetCore.Identity.SignInResult { IsNotAllowed: true }:
                return Results.Problem("Please contact the admin for Login resolution.", statusCode: 401);
            case Microsoft.AspNetCore.Identity.SignInResult { RequiresTwoFactor: true }:
                return Results.Problem("Two-factor authentication is required. Please complete the two-factor authentication process.", statusCode: 401);
            case Microsoft.AspNetCore.Identity.SignInResult { Succeeded: false }:
                return Results.Problem("Invalid login attempt. Please check your username and password and try again.", statusCode: 401);            
            default:
                return Results.Problem("Unexpected error. Please try again.", statusCode: 67);
        }

            
            
    }
}