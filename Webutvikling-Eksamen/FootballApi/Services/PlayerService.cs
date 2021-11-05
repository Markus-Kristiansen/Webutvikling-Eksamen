using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;
using FootballApi.Models;
using MongoDB.Bson;
using System;
using Microsoft.AspNetCore.Mvc;

namespace FootballApi.Services
{
    public class PlayerService
    {
        private readonly IMongoCollection<Player> _players;

        public PlayerService(IFootballDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            //_players = database.GetCollection<Player>(settings.PlayerCollectionName);

            //var collection = database.GetCollection<Team>(settings.TeamCollectionName);

            _players = database.GetCollection<Player>(settings.PlayerCollectionName);
            var docs = _players.Aggregate()
                                     .Lookup("Team", "Team", "Name", "Team")
                                     .As<BsonDocument>()
                                     .ToList();
            foreach (var doc in docs)
            {
                Console.WriteLine(doc.ToJson());
            }

        }

        public List<Player> GetPlayers()
        {

            // Husk å bruke try catch hver gang man gjør CRUD mot en database
            return _players.Find(player => true).ToList();
        }

        public Player GetPlayer(string id)
        {
            var result = _players.Find(player => player.Id == id);

            return result.FirstOrDefault();
        }

        public Player getPlayerByName(string name)
        {
            var result = _players.Find(player => player.Name == name);

            return result.FirstOrDefault();
        }

        public Player CreatePlayer(Player newPlayer)
        {
            _players.InsertOne(newPlayer);

            return newPlayer;
        }
    }
}