import PlayerList from "./components/player/PlayerList";
import { PlayerProvider } from "./contexts/player/PlayerContext";
import "bootstrap/dist/css/bootstrap.min.css";
import ChosenPlayer from "./components/player/ChosenPlayer";

const App = () => {
  return (
    <>
      <PlayerProvider>
        <PlayerList />
        <ChosenPlayer />
      </PlayerProvider>
    </>
  );
};

export default App;
