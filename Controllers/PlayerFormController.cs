

using Multiworld.Models;
using Multiworld.Services;
using Microsoft.AspNetCore.Mvc;

namespace AnotherTwitchApp.Controllers;

[ApiController]
[Route("[controller]")]
public class PlayerFormController : ControllerBase
{
    public PlayerFormController()
    {
    }

    [HttpGet]
    public ActionResult<List<PlayerForm>> GetAll() => PlayerFormService.GetAll();

    [HttpGet("{id}")]
    public ActionResult<PlayerForm> Get(int id)
    {
        var playerForm = PlayerFormService.Get(id);

        if (playerForm is null)
        {
            return NotFound();
        }

        return playerForm;
    }

    [HttpPost]
    public IActionResult Create(PlayerForm playerForm)
    {
        PlayerFormService.Add(playerForm);
        return CreatedAtAction(nameof(Get), new { id = playerForm.id }, playerForm);
    }

    [HttpPut("{id}")]
    public IActionResult Update(int id, PlayerForm playerForm)
    {
        if (id != playerForm.id)
        {
            return BadRequest();
        }

        var existingPlayerForm = PlayerFormService.Get(id);
        if (existingPlayerForm is null)
        {
            return NotFound();
        }

        PlayerFormService.Update(playerForm);
        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var existingPlayerForm = PlayerFormService.Get(id);
        if (existingPlayerForm is null)
        {
            return NotFound();
        }

        PlayerFormService.Delete(id);
        return NoContent();
    }



}