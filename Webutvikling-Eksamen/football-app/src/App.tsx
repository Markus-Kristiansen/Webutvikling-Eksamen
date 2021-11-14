import "bootstrap/dist/css/bootstrap.min.css";
import { PlayerProvider } from "./contexts/player/PlayerContext";
import { TeamProvider } from "./contexts/team/TeamContext";
import Routing from "./routing/Routing";

const App = () => {
  return (
    <>
      <PlayerProvider>
        <TeamProvider>
          <Routing />
        </TeamProvider>
      </PlayerProvider>
    </>
  );
};

export default App;
