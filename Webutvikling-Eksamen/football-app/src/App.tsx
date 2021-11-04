import PlayerList from "./components/player/PlayerList";
import { PlayerProvider } from "./contexts/player/PlayerContext";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <PlayerProvider>
        <PlayerList />
      </PlayerProvider>
    </>
  );
};

export default App;
