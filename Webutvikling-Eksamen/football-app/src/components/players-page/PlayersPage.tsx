import { ChangeEvent, FC, useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";

import PlayerTable from "./PlayerTable";

import { PlayerContext } from "../../contexts/player/PlayerContext";
import { IPlayer } from "../../interfaces/Interfaces";

import { PlayerContextType } from "../../types/PlayerContextType";
import SearchBar from "../reusable/SearchBar";

const PlayersPage: FC = () => {
  const { players } = useContext(PlayerContext) as PlayerContextType;
  const [string, setString] = useState<any>("");

  const search = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    setString(value);
  };

  const searchPlayers = () => {
    return players.map((data: IPlayer, key: number) => {
      if (
        data.name.toLowerCase().includes(string.toLowerCase()) ||
        data.team.toLowerCase().includes(string.toLowerCase())
      ) {
        return (
          <Col md={6} lg={4} xl={3} key={key}>
            <PlayerTable
              id={data.id}
              name={data.name}
              image={data.image}
              team={data.team}
              age={data.age}
              nationality={data.nationality}
              teamIcon={data.teamIcon}
            />
          </Col>
        );
      }
    });
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
        <SearchBar search={search} />
      </div>
      <Row>{searchPlayers()}</Row>
    </div>
  );
};

export default PlayersPage;
