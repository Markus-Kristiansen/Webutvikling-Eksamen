import { BrowserRouter, Route, Routes } from "react-router-dom";
import OnePlayer from "../components/player/OnePlayer";
import MainNavigation from "../components/shared/MainNavigation";
import { Home, Players, Teams, PlayerInfo } from "../pages/index";

const Routing = () => {
  return (
    <BrowserRouter>
      <MainNavigation />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="players" element={<Players />} />
        <Route path="teams" element={<Teams />} />
        <Route path="player-info" element={<OnePlayer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
