import { FC, useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { TeamContext } from "../../contexts/team/TeamContext";
import { ITeam } from "../../interfaces/Interfaces";
import { TeamContextType } from "../../types/TeamContextType";
import TeamItem from "./TeamItem";

const TeamList: FC = () => {
  const { teams } = useContext(TeamContext) as TeamContextType;

  const createTeamList = () => {
    return teams.map((team: ITeam, key: number) => {
      return (
        <Col md={6} lg={4} xl={3} key={key}>
          <TeamItem
            id={team.id}
            name={team.name}
            est={team.est}
            image={team.image}
            city={team.city}
            country={team.country}
          />
        </Col>
      );
    });
  };

  return <Row>{createTeamList()}</Row>;
};

export default TeamList;
