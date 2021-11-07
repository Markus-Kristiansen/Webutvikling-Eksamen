import PlayerList from "../components/player/PlayerList";
import { PlayerProvider } from "../contexts/player/PlayerContext";

const Players = () => {
  return (
    <div className="bg-light">
      <PlayerProvider>
        <PlayerList />
      </PlayerProvider>
    </div>
  );
};

export default Players;
