import OnePlayer from "../components/player/OnePlayer";
import { PlayerProvider } from "../contexts/player/PlayerContext";

const PlayerInfo = () => {
  return (
    <PlayerProvider>
      <OnePlayer />
    </PlayerProvider>
  );
};

export default PlayerInfo;
