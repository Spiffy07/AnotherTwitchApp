

using Chatroom.Models;
using Multiworld.Models;

using Microsoft.EntityFrameworkCore;

public class TwitchDbContext : DbContext
{
    public TwitchDbContext(DbContextOptions options) : base(options) { }
    public DbSet<Chatter> Chatters { get; set; } = null!;
    public DbSet<PlayerForm> PlayerForms { get; set; } = null!;
}