import { FC, useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { PlayerContext } from "../../contexts/player/PlayerContext";
import { IOnePlayer, IPlayer } from "../../interfaces/Interfaces";
import { playerService } from "../../services/playerService";
import { PlayerContextType } from "../../types/PlayerContextType";
import OnePlayer from "./OnePlayer";

import PlayerCard from "./PlayerCard";

const PlayerList: FC = () => {
  const { players } = useContext(PlayerContext) as PlayerContextType;

  const [data, setData] = useState<any>();

  const getId = async (id: string) => {
    console.log(id);
    const res = await playerService.getPlayerById(id);
    console.log(res);
  };

  const createPlayerList = () => {
    return players.map((player: IPlayer, key: number) => {
      return (
        <Col md={6} lg={4} xl={3} key={key}>
          <Link to="/player-info" style={{ textDecoration: "none" }}>
            <PlayerCard
              id={player.id}
              name={player.name}
              age={player.age}
              image={player.image}
              nationality={player.nationality}
              team={player.team}
              clicked={getId}
            />
          </Link>
        </Col>
      );
    });
  };

  return <Row>{createPlayerList()}</Row>;
};

export default PlayerList;
