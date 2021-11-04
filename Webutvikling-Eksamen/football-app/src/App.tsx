import "./App.css";

import PlayerList from "./components/player/PlayerList";
import { PlayerProvider } from "./contexts/player/PlayerContext";

const App = () => {
  return (
    <div className="App">
      <PlayerProvider>
        <PlayerList />
      </PlayerProvider>
    </div>
  );
};

export default App;
