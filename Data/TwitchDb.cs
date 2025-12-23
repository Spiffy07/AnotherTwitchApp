
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

using Chatroom.Models;
using Multiworld.Models;

namespace AnotherTwitchApp.DbContexts;
public class TwitchDbContext : IdentityDbContext
{
    public TwitchDbContext(DbContextOptions<TwitchDbContext> options) : base(options) { }
    public DbSet<Chatter> Chatters { get; set; } = null!;
    public DbSet<PlayerForm> PlayerForms { get; set; } = null!;
}

