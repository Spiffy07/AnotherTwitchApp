
using Microsoft.EntityFrameworkCore;

using AnotherTwitchApp.DbContexts;

namespace Multiworld.Models
{
    public class PlayerForm
    {
        public int Id { get; set; }
        public string? username { get; set; }
        public string? session { get; set; }
        public string? additionalComments { get; set; }
    }

    public class PlayerFormService
    {

        private readonly TwitchDbContext _db;
        //static int nextId = 1;

        public PlayerFormService(TwitchDbContext db)
        {
            _db = db;
        }

        public async Task<List<PlayerForm>> GetAll()
        {
            return await _db.PlayerForms.ToListAsync();
        }

        public async Task<PlayerForm?> Get(int Id)
        {
            return await _db.PlayerForms.AsNoTracking().FirstOrDefaultAsync(p => p.Id == Id);
        }

        public async Task<IResult> Add(PlayerForm playerForm)
        {
            PlayerForm? getResult = await Get(playerForm.Id);
            if (getResult != null)
            {
                return Results.Conflict($"PlayerForm with Id {playerForm.Id} already exists.");
            }


            await _db.PlayerForms.AddAsync(playerForm);
            await _db.SaveChangesAsync();

            return Results.Created($"/PlayerForm/{playerForm.Id}", playerForm);
        }

        public async Task<IResult> Delete(int Id)
        {
            PlayerForm? playerForm = await Get(Id);
            if (playerForm == null)
                return Results.NotFound();

            _db.PlayerForms.Remove(playerForm);
            int numberOfSavedEntries = await _db.SaveChangesAsync();
            if (numberOfSavedEntries == 0)
                return Results.InternalServerError();
            return Results.Ok(playerForm);
        }

        public async Task<int> Update(PlayerForm playerForm)
        {
            _db.PlayerForms.Update(playerForm);
            return await _db.SaveChangesAsync();
        }
    }
}