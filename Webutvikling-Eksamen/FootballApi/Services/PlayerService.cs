using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;
using FootballApi.Models;

namespace FootballApi.Services
{
    public class PlayerService
    {
        private readonly IMongoCollection<Player> _players;

        public PlayerService(IFootballDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _players = database.GetCollection<Player>(settings.PlayerCollectionName);
        }

        public List<Player> GetPlayers()
        {
            // Husk å bruke try catch hver gang man gjør CRUD mot en database
            return _players.Find(player => true).ToList();
        }
    }
}