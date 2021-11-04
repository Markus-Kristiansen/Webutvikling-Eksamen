import { FC, useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { PlayerContext } from "../../contexts/player/PlayerContext";
import { IPlayer } from "../../interfaces/Interfaces";
import { PlayerContextType } from "../../types/PlayerContextType";
import PlayerItem from "./PlayerItem";

const PlayerList: FC = () => {
  const { players } = useContext(PlayerContext) as PlayerContextType;

  const createPlayerList = () => {
    return players.map((player: IPlayer, key: number) => {
      return (
        <Col md={6} lg={4} xl={3} key={key}>
          <PlayerItem
            id={player.id}
            name={player.name}
            age={player.age}
            image={player.image}
            nationality={player.nationality}
            team={player.team}
          />
        </Col>
      );
    });
  };

  return <Row>{createPlayerList()}</Row>;
};

export default PlayerList;
