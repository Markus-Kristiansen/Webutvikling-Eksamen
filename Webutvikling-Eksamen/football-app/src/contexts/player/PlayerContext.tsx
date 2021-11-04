import axios from "axios";
import { createContext, FC, useEffect, useState } from "react";
import { IPlayer } from "../../interfaces/Interfaces";
import { playerService } from "../../services/playerService";
import { PlayerContextType } from "../../types/PlayerContextType";

export const PlayerContext = createContext<PlayerContextType | null>(null);

export const PlayerProvider: FC = ({ children }) => {
  const [players, setPlayers] = useState<IPlayer[]>([]);

  useEffect(() => {
    getAllPlayers();
  }, []);

  const getAllPlayers = async () => {
    const res = await playerService.getAllPlayers();
    setPlayers(res);
  };

  return (
    <PlayerContext.Provider value={{ players }}>
      {children}
    </PlayerContext.Provider>
  );
};
