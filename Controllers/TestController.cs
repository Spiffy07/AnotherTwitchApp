using Chatroom.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AnotherTwitchApp.Controllers;

[ApiController]
[Route("[controller]")]
public class TestController(ILogger<TestController> _logger, ChatterDb _db, string version = "v1.0") : ControllerBase    // this works the same as the constructor with DI
{
    // private readonly ILogger<TestController> _logger;
    // private ChatterDb _db;

    // public TestController(ILogger<TestController> logger, ChatterDb db)
    // {
    //     _logger = logger;
    //     _db = db;
    // }

    [HttpGet("{version}")] // input parameter for route
    public async Task<List<Chatter>> Get()
    {
        return await _db.Chatters.ToListAsync();
    }

    [HttpPost]
    public async Task Post(Chatter chatter)
    {
        await _db.Chatters.AddAsync(chatter);
        await _db.SaveChangesAsync();
    }

    [HttpGet("test")]
    public void test()
    {
        Console.WriteLine(" Working Var tester function");
    }
}
