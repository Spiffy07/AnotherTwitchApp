
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

using AnotherTwitchApp.DbContexts;

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
        public async Task<List<PlayerForm>> GetAllPlayerFormsAsync()
        {
            return await _db.PlayerForms.ToListAsync();
        }

        public async Task<PlayerForm?> GetPlayerFormFromDbAsync(PlayerForm playerForm)
        {
            return await _db.PlayerForms.AsNoTracking()
                .FirstOrDefaultAsync(p => p.username.ToLower() == playerForm.username.ToLower() && p.session == playerForm.session);
        }

        public async Task<IResult> AddPlayerFormToDbAsync(PlayerForm playerForm)
        {
            PlayerForm? getResult = await GetPlayerFormFromDbAsync(playerForm);
            if (getResult != null)
            {
                return Results.Conflict($"{playerForm.username} is already signed up for {playerForm.session}.");
            }


            await _db.PlayerForms.AddAsync(playerForm);
            await _db.SaveChangesAsync();

            return Results.Created($"/api/PlayerForm/{playerForm.username}_{playerForm.session}", playerForm);
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

        public async Task<int> UpdatePlayerFormAsync(PlayerForm playerForm)
        {
            _db.PlayerForms.Update(playerForm);
            return await _db.SaveChangesAsync();
        }
    }
}