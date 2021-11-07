import { createContext, FC, useEffect, useState } from "react";
import { IPlayer } from "../../interfaces/Interfaces";
import { playerService } from "../../services/playerService";
import { PlayerContextType } from "../../types/PlayerContextType";

export const PlayerContext = createContext<PlayerContextType | null>(null);

export const PlayerProvider: FC = ({ children }) => {
  const [players, setPlayers] = useState<IPlayer[]>([]);
  const [player, setPlayer] = useState<IPlayer[]>([]);

  useEffect(() => {
    getAllPlayers();
    getPlayerById("6183c8c40adaeb8d723eaff5");
  }, []);

  const getAllPlayers = async () => {
    const res = await playerService.getAllPlayers();
    setPlayers(res);
  };

  const getPlayerById = async (id: string) => {
    const res = await playerService.getPlayerById(id);
    console.log(res);

    // Wrapping the object in an array
    setPlayer([res]);
  };

  // Everything that uses this context needs to be inside PlayerProvider.
  return (
    <PlayerContext.Provider value={{ players }}>
      {children}
    </PlayerContext.Provider>
  );
};
