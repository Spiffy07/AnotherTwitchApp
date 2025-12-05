

using Multiworld.Models;

namespace AnotherTwitchApp.Services;

public static class PlayerFormService
{
    static List<PlayerForm> PlayerForms { get; }
    static int nextId = 2;
    static PlayerFormService()
    {
        PlayerForms = new List<PlayerForm>
        {
            new PlayerForm { id = 0, username = "testuser", session = "session1", additionalComments = "No comments" },     // TODO: change session to DateTime type
            new PlayerForm { id = 1, username = "player2", session = "session2", additionalComments = "Looking forward to it!" }
        };
    }

    public static List<PlayerForm> GetAll() => PlayerForms;

    public static PlayerForm? Get(int id) => PlayerForms.FirstOrDefault(p => p.username.GetHashCode() == id);

    public static void Add(PlayerForm playerForm)
    {
        playerForm.id = nextId++;
        PlayerForms.Add(playerForm);
    }

    public static void Delete(int id)
    {
        var playerForm = Get(id);
        if (playerForm is null)
            return;

        PlayerForms.Remove(playerForm);
    }

    public static void Update(PlayerForm playerForm)
    {
        var index = PlayerForms.FindIndex(p => p.id == playerForm.id);
        if (index == -1)
            return;

        PlayerForms[index] = playerForm;
    }
}