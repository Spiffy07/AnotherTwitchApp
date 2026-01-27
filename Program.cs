

using Microsoft.OpenApi;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;

using AnotherTwitchApp.DbContexts;
using Multiworld.Models;
using Auth.Models;

const bool useInMemoryDatabase = true;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

if (useInMemoryDatabase)
{
    builder.Services.AddDbContext<TwitchDbContext>(options => options.UseInMemoryDatabase("TwitchUserDb"));
}
else
{
    var connectionString = builder.Configuration.GetConnectionString("TwitchDb") ?? "Data Source=TwitchDb";
    builder.Services.AddSqlite<TwitchDbContext>(connectionString);
}

builder.Services.AddAuthentication().AddCookie("MyCookieAuth", Options =>
{
    Options.Cookie.Name = "MyCookieAuth";
});
builder.Services.AddAuthorization();

builder.Services.AddIdentityApiEndpoints<IdentityUser>().AddEntityFrameworkStores<TwitchDbContext>();

builder.Services.AddScoped<PlayerFormService>();
builder.Services.AddScoped<IdentityService>();

builder.Services.AddEndpointsApiExplorer();

const string schemeId = "bearer";
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "Chatroom API",
        Description = "Chatroom for the memes and luls",
        Version = "V1"
    });

    c.AddSecurityDefinition(schemeId, new OpenApiSecurityScheme
    {
        // In = ParameterLocation.Header,
        Description = "Please enter a valid token",
        // Name = "Authorization",
        Type = SecuritySchemeType.Http,
        BearerFormat = "JWT",
        Scheme = "bearer"
    });

    c.AddSecurityRequirement(document =>
    {
        return new OpenApiSecurityRequirement
        {
            [new OpenApiSecuritySchemeReference(schemeId, document)] = []
        };
    });
});

builder.Services.AddRouting(options => options.LowercaseUrls = true);

var app = builder.Build();

app.MapIdentityApi<IdentityUser>();     // Map Identity API endpoints AUTH stuff again

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}
else
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Chat API V1");
        c.InjectStylesheet("/swagger-ui/SwaggerDark.css");
    });
    app.MapGet("/swagger-ui/SwaggerDark.css", async (CancellationToken cancellationToken) =>
    {
        var css = await File.ReadAllBytesAsync("SwaggerDark.css", cancellationToken);
        return Results.File(css, "text/css");
    }).ExcludeFromDescription();

}
app.UseStaticFiles();
app.UseHttpsRedirection();

app.UseRouting();
app.UseAuthentication();
app.UseAuthorization();



app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();
