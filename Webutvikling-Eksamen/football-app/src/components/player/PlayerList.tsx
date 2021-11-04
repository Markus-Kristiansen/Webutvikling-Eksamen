import { FC, useContext } from "react";
import { PlayerContext } from "../../contexts/player/PlayerContext";
import { IPlayer } from "../../interfaces/Interfaces";
import { PlayerContextType } from "../../types/PlayerContextType";
import PlayerItem from "./PlayerItem";

const PlayerList: FC = () => {
  const { players } = useContext(PlayerContext) as PlayerContextType;

  const createPlayerList = () => {
    return players.map((player: IPlayer, key: number) => {
      return (
        <PlayerItem
          key={key}
          id={player.id}
          name={player.name}
          age={player.age}
          image={player.image}
          nationality={player.nationality}
          team={player.team}
        />
      );
    });
  };

  return <section>{createPlayerList()}</section>;
};

export default PlayerList;
