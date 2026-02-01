

using Microsoft.AspNetCore.Mvc;

using Multiworld.Models;
using AnotherTwitchApp.DbContexts;

namespace AnotherTwitchApp.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PlayerFormController(PlayerFormService _playerFormService) : ControllerBase
{
    [HttpGet]
    public async Task<List<PlayerForm>> GetAllAsync()
    {
        return await _playerFormService.GetAllPlayerFormsAsync();
    }

    // [HttpGet("{username}")]
    // public async Task<ActionResult<PlayerForm>> Get(string username)
    // {
    //     var playerForm = await _playerFormService.GetPlayerForm(username);

    //     if (playerForm is null)
    //     {
    //         return NotFound();
    //     }

    //     return playerForm;
    // }

    [HttpPost]
    public async Task<IResult> CreateSignupAsync([FromBody] PlayerForm playerForm)
    {
        return await _playerFormService.AddPlayerFormToDbAsync(playerForm);
    }

    // [HttpPut("{username}")]
    // public async Task<IActionResult> Update(TwitchDbContext db, string username, PlayerForm playerForm)
    // {
    //     if (username.ToLower() != playerForm.username.ToLower())
    //     {
    //         return BadRequest();
    //     }

    //     var existingPlayerForm = await _playerFormService.GetPlayerForm(username);
    //     if (existingPlayerForm is null)
    //     {
    //         return NotFound();
    //     }

    //     if (await _playerFormService.UpdatePlayerForm(playerForm) > 0)
    //     {
    //         await db.SaveChangesAsync();
    //         return Ok(playerForm);
    //     }
    //     return NoContent();
    // }

    // [HttpDelete("{username}")]
    // public async Task<IResult> Delete(string username)
    // {
    //     return await _playerFormService.DeletePlayerForm(username);
    // }
}