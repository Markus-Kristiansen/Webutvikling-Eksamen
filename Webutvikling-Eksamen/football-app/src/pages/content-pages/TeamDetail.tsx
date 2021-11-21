import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import ShowPlayerList from "../../components/team-detail/ShowPlayerList";
import ShowTeamList from "../../components/team-detail/ShowTeamList";
import TeamImage from "../../components/team-detail/TeamImage";
import { TeamContext } from "../../contexts/team/TeamContext";
import { ITeam } from "../../interfaces/Interfaces";
import { TeamContextType } from "../../types/TeamContextType";

const TeamDetail = () => {
  const { id } = useParams();

  const { getTeamById } = useContext(TeamContext) as TeamContextType;

  const [team, setTeam] = useState<ITeam>();

  useEffect(() => {
    if (id) {
      const _team = getTeamById(id);
      setTeam(_team);
    }
  });

  return (
    <div className="container border border-danger">
      <div className="row border border-dark" style={{ height: 300 }}>
        <div
          className="col-xs-12 col-sm-4 col-md-4 col-lg-4 border border-info"
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#f5f5f5",
            position: "relative",
          }}
        >
          <TeamImage image={team?.image} />
        </div>

        <div
          style={{ backgroundColor: "#cfc7db" }}
          className="col-xs-12 col-sm-8 col-md-8 col-lg-8 border border-success"
        >
          Row1 Col2
        </div>
      </div>
      <div>
        <div
          className="row"
          style={{
            display: "flex",
            height: 250,
            overflowY: "auto",
            backgroundColor: "#3a043f",
          }}
        >
          <ShowPlayerList id={team?.id!} />
        </div>
      </div>
      <ShowTeamList />
    </div>
  );
};

export default TeamDetail;
