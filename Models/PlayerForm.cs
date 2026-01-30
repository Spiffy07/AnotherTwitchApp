
using Microsoft.EntityFrameworkCore;

using AnotherTwitchApp.DbContexts;
using System.ComponentModel.DataAnnotations;

namespace Multiworld.Models
{
    [PrimaryKey(nameof(session), nameof(username))]
    public class PlayerForm
    {
        [Required]
        public string username { get; set; } = string.Empty;
        [Required]
        public string session { get; set; } = string.Empty;
        public string additionalComments { get; set; } = string.Empty;
    }

    public class PlayerFormService(TwitchDbContext _db)
    {
        public async Task<List<PlayerForm>> GetAllPlayerForms()
        {
            return await _db.PlayerForms.ToListAsync();
        }

        public async Task<PlayerForm?> GetPlayerForm(PlayerForm playerForm)
        {
            return await _db.PlayerForms.AsNoTracking()
                .FirstOrDefaultAsync(p => p.username.ToLower() == playerForm.username.ToLower() && p.session == playerForm.session);
        }

        public async Task<IResult> AddPlayerForm(PlayerForm playerForm)
        {
            PlayerForm? getResult = await GetPlayerForm(playerForm);
            if (getResult != null)
            {
                return Results.Conflict($"{playerForm.username} is already signed up for {playerForm.session}.");
            }


            await _db.PlayerForms.AddAsync(playerForm);
            await _db.SaveChangesAsync();

            return Results.Created($"/PlayerForm/{playerForm.username}_{playerForm.session}", playerForm);
        }

        // public async Task<IResult> DeletePlayerForm(string username)
        // {
        //     PlayerForm? playerForm = await GetPlayerForm(username);
        //     if (playerForm == null)
        //         return Results.NotFound();

        //     _db.PlayerForms.Remove(playerForm);
        //     int numberOfSavedEntries = await _db.SaveChangesAsync();
        //     if (numberOfSavedEntries == 0)
        //         return Results.InternalServerError();
        //     return Results.Ok(playerForm);
        // }

        public async Task<int> UpdatePlayerForm(PlayerForm playerForm)
        {
            _db.PlayerForms.Update(playerForm);
            return await _db.SaveChangesAsync();
        }
    }
}