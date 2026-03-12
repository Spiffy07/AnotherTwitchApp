
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

using Chatroom.Models;
using Multiworld.Models;
using Auth.Models;

namespace AnotherTwitchApp.DbContexts;


public class TwitchDbContext : IdentityDbContext<MyIdentity>
{
    public const string COOKIE_NAME = "MyCookieAuth";
    public TwitchDbContext(DbContextOptions<TwitchDbContext> options) : base(options) { }
    public DbSet<Chatter> Chatters { get; set; } = null!;
    public DbSet<PlayerForm> PlayerForms { get; set; } = null!;   
}

