import React, { ChangeEvent, FC, useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

import { ITeam } from "../../interfaces/Interfaces";
import TeamTable from "./TeamTable";
import { TeamContext } from "../../contexts/team/TeamContext";
import { TeamContextType } from "../../types/TeamContextType";
import SearchBar from "../reusable/SearchBar";

const TeamsPage: FC = () => {
  //const [data, setData] = useState<IOnePlayer[]>([]);
  const { teams } = useContext(TeamContext) as TeamContextType;
  const [data, setData] = useState<ITeam[]>([]);
  const [string, setString] = useState<any>("");

  const search = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    setString(value);
  };

  //const getId = async (id: string) => {
  //const value = ;
  //console.log(value);
  //};

  const searchTeams = () => {
    return teams.map((data: ITeam, key: number) => {
      if (data.name.toLowerCase().includes(string.toLowerCase())) {
        return (
          <Col md={6} lg={4} xl={3} key={key}>
            <TeamTable
              id={data.id}
              name={data.name}
              image={data.image}
              est={data.est}
              city={data.city}
              country={data.country}
            />
          </Col>
        );
      }
    });
  };

  return (
    <Row>
      <SearchBar search={search} />

      {/*<input onChange={test} type="text" placeholder={`Search...`} />*/}
      <p>{string}</p>
      {searchTeams()}
    </Row>
  );
};

export default TeamsPage;
