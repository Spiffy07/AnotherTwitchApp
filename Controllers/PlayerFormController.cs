

using Microsoft.AspNetCore.Mvc;

using Multiworld.Models;
using AnotherTwitchApp.DbContexts;

namespace AnotherTwitchApp.Controllers;

[ApiController]
[Route("[controller]")]
public class PlayerFormController : ControllerBase
{
    public PlayerFormService _playerFormService { get; set; }
    public PlayerFormController(PlayerFormService playerFormService)
    {
        _playerFormService = playerFormService;
    }

    [HttpGet]
    public async Task<List<PlayerForm>> GetAll(TwitchDbContext db)
    {
        return await _playerFormService.GetAll();
    }

    [HttpGet("{Id}")]
    public async Task<ActionResult<PlayerForm>> Get(int Id)
    {
        var playerForm = await _playerFormService.Get(Id);

        if (playerForm is null)
        {
            return NotFound();
        }

        return playerForm;
    }

    [HttpPost]
    public async Task<IResult> Create(PlayerForm playerForm)
    {
        return await _playerFormService.Add(playerForm);
    }

    [HttpPut("{Id}")]
    public async Task<IActionResult> Update(TwitchDbContext db, int Id, PlayerForm playerForm)
    {
        if (Id != playerForm.Id)
        {
            return BadRequest();
        }

        var existingPlayerForm = await _playerFormService.Get(Id);
        if (existingPlayerForm is null)
        {
            return NotFound();
        }

        if (await _playerFormService.Update(playerForm) > 0)
        {
            await db.SaveChangesAsync();
            return Ok(playerForm);
        }
        return NoContent();
    }

    [HttpDelete("{Id}")]
    public async Task<IResult> Delete(int Id)
    {
        return await _playerFormService.Delete(Id);
    }
}