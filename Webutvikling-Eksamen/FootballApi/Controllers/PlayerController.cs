

using System.Collections.Generic;
using FootballApi.Models;
using FootballApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace FootballApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PlayerController : ControllerBase
    {
        private readonly PlayerService _playerService;

        public PlayerController(PlayerService playerService)
        {
            _playerService = playerService;
        }

        [HttpGet]
        public IEnumerable<Player> GetPlayers()
        {
            return _playerService.GetPlayers();
        }


        [HttpGet]
        [Route("/player/name")]
        public Player GetPlayer(string id)
        {
            return _playerService.GetPlayer(id);
        }

        [HttpGet]
        [Route("{name}")]
        public Player GetPlayerByName(string name)
        {
            return _playerService.GetPlayer(name);
        }


        [HttpPost]
        public Player CreatePlayer(Player newPlayer)
        {
            return _playerService.CreatePlayer(newPlayer);
        }
    }
}