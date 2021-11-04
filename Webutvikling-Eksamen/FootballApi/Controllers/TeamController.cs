using System.Collections.Generic;
using FootballApi.Models;
using FootballApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace FootballApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TeamController : ControllerBase
    {
        private readonly TeamService _teamService;

        public TeamController(TeamService teamService)
        {
            _teamService = teamService;
        }

        [HttpGet]
        public IEnumerable<Team> GetTeams()
        {
            return _teamService.GetTeams();
        }

        [HttpPost]
        public Team CreateTeam(Team newTeam)
        {
            return _teamService.CreateTeam(newTeam);
        }
    }
}