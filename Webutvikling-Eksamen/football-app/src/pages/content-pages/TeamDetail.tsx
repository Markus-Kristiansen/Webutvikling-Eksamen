import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { TeamContext } from "../../contexts/team/TeamContext";
import { ITeam } from "../../interfaces/Interfaces";
import { TeamContextType } from "../../types/TeamContextType";

const TeamDetail = () => {
  const { id } = useParams();

  const { getTeamById } = useContext(TeamContext) as TeamContextType;
  const { teams } = useContext(TeamContext) as TeamContextType;

  const [team, setTeam] = useState<ITeam>();

  useEffect(() => {
    if (id) {
      const _team = getTeamById(id);
      setTeam(_team);
    }
  });

  const showAllTeams = () => {
    return teams.map((team: ITeam, key: number) => {
      return (
        <div
          className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 border border-danger mx-auto"
          style={{ marginBottom: 10 }}
          key={key}
        >
          <Link to={`/team-info/${team.id}`} style={{ textDecoration: "none" }}>
            <div
              style={{ padding: 5, justifyContent: "center" }}
              className="border border-dark"
            >
              <img
                src={`https://localhost:5001/images/testimages/${team?.image}`}
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: "block",
                }}
                height="200px"
                alt="teams-image"
              />
            </div>
          </Link>
        </div>
      );
    });
  };

  return (
    <div className="container border border-danger">
      <div className="row border border-dark" style={{ height: 300 }}>
        <div
          className="col-xs-12 col-sm-4 col-md-4 col-lg-4 border border-info"
          style={{ display: "flex" }}
        >
          <img
            src={`https://localhost:5001/images/testimages/${team?.image}`}
            style={{
              alignItems: "center",
              margin: "auto",
              display: "block",
              minWidth: 0,
            }}
            height="250px"
            alt="teams-image"
          />
        </div>

        <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8 border border-success">
          Row1 Col2
        </div>
      </div>
      <div className="row" style={{ height: 250 }}>
        <div className="col-12">Row2 Col1</div>
      </div>
      <div className="row" style={{ height: 300, overflowY: "auto" }}>
        {showAllTeams()}
      </div>
    </div>
  );
};

export default TeamDetail;
