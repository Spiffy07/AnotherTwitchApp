using System.Data.Common;
using Chatroom.Models;
using Microsoft.EntityFrameworkCore;

namespace Chatroom.Models
{
    public class Chatter
    {
        public int Id { get; set; }
        public string? Username { get; set; }
    }
}

public class ChatterDb : DbContext
{
    public ChatterDb(DbContextOptions options) : base(options) { }
    public DbSet<Chatter> Chatters { get; set; } = null!;
}