using System.Text.Json;
using Chatroom.Models;
using Multiworld.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AnotherTwitchApp.Controllers;

[ApiController]
[Route("[controller]")]
public class TestController(ILogger<TestController> _logger, TwitchDb _db, string version = "v1.0") : ControllerBase    // this works the same as the constructor with DI
{
    // private readonly ILogger<TestController> _logger;
    // private TwitchDb _db;

    // public TestController(ILogger<TestController> logger, TwitchDb db)
    // {
    //     _logger = logger;
    //     _db = db;
    // }

    [HttpGet("{version}")] // input parameter for route
    public async Task<List<Chatter>> Get()
    {
        return await _db.Chatters.ToListAsync();
    }

    // [HttpPost]
    // public async Task Post(Chatter chatter)
    // {
    //     await _db.Chatters.AddAsync(chatter);
    //     await _db.SaveChangesAsync();
    // }

    [HttpPost("test")]
    public string Test([FromBody] PlayerForm data)
    {
        if (data == null)
        {
            return JsonSerializer.Serialize("No data received");
        }

        Console.WriteLine($"Username: {data.username} Session: {data.session} Comments: {data.additionalComments} Id: {data.id = -1}");

        return JsonSerializer.Serialize("Data received successfully");
    }
}