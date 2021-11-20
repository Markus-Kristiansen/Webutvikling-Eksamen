import { FC, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { PlayerContext } from "../../contexts/player/PlayerContext";
import { TeamContext } from "../../contexts/team/TeamContext";
import { IPlayer, ITeam } from "../../interfaces/Interfaces";
import { PlayerContextType } from "../../types/PlayerContextType";
import { TeamContextType } from "../../types/TeamContextType";

export type Props = {
  id?: string;
};

const PlayerList: FC<Props> = ({ id }) => {
  const { players } = useContext(PlayerContext) as PlayerContextType;
  const { teams } = useContext(TeamContext) as TeamContextType;

  const showPlayerList = (id: string) => {
    return players.map((player: IPlayer, key: number) => {
      return teams.map((team: ITeam) => {
        if (player.team === team.name && team.id === id) {
          return (
            <div
              className="col-xs-12 col-sm-8 col-md-4 col-lg-1 border border-success"
              style={{
                height: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link to={`/player-info/${player.id}`}>
                <img
                  src={`https://localhost:5001/images/${player.team}/${player.image}`}
                  alt="player"
                  height="100px"
                />
              </Link>
            </div>
          );
        }
      });
    });
  };

  return (
    <div className="row" style={{ height: 250, display: "flex" }}>
      {showPlayerList(id!)}
    </div>
  );
};

export default PlayerList;
