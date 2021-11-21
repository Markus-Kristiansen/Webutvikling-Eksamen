import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainNavigation from "../components/shared/MainNavigation";
import {
  Home,
  NewPlayer,
  PlayerDetail,
  Players,
  TeamDetail,
  Teams,
} from "../pages/index";

const Routing = () => {
  return (
    <BrowserRouter>
      <MainNavigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="new-player" element={<NewPlayer />} />
        <Route path="players" element={<Players />} />
        <Route path="teams" element={<Teams />} />
        <Route path="player-info/:id" element={<PlayerDetail />} />
        <Route path="team-info/:id" element={<TeamDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
