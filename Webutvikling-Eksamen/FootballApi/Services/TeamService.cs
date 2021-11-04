using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;
using FootballApi.Models;

namespace FootballApi.Services
{
    public class TeamService
    {
        private readonly IMongoCollection<Team> _teams;

        public TeamService(IFootballDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _teams = database.GetCollection<Team>(settings.TeamCollectionName);
        }

        public List<Team> GetTeams()
        {
            // Husk å bruke try catch hver gang man gjør CRUD mot en database
            return _teams.Find(team => true).ToList();
        }

        public Team CreateTeam(Team newTeam)
        {
            _teams.InsertOne(newTeam);

            return newTeam;
        }
    }
}