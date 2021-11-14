import { createContext, FC, useEffect, useState } from "react";
import { IOnePlayer, IPlayer } from "../../interfaces/Interfaces";
import { playerService } from "../../services/playerService";
import { PlayerContextType } from "../../types/PlayerContextType";

export const PlayerContext = createContext<PlayerContextType | null>(null);

export const PlayerProvider: FC = ({ children }) => {
  const [players, setPlayers] = useState<IPlayer[]>([]);
  const [player, setPlayer] = useState<IPlayer[]>([]);
  const [test, setTest] = useState<IOnePlayer[]>([]);

  useEffect(() => {
    getAllPlayers();
    getAllPlayersOne();
    getPlayerById("6183c8c40adaeb8d723eaff5");
  }, []);

  const getAllPlayers = async () => {
    const res = await playerService.getAllPlayers();
    setPlayers(res);
  };

  const getAllPlayersOne = async () => {
    const res = await playerService.getAllPlayersOne();
    setTest(res);
  };

  /*const getPlayerById = async (id: string) => {
    const res = await playerService.getPlayerById(id);
    console.log(res);

    // Wrapping the object in an array
    setPlayer([res]);
  };*/

  const getPlayerById = (id: string) => {
    return players.find((player) => player.id === id) as IPlayer;
  };

  // Everything that uses this context needs to be inside PlayerProvider.
  return (
    <PlayerContext.Provider value={{ players, test, getPlayerById }}>
      {children}
    </PlayerContext.Provider>
  );
};
