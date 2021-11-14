import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
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
  }, []);

  return (
    <section>
      <article>
        <h3>{team?.name}</h3>
        <p>{team?.country}</p>
        <img
          src={`https://localhost:5001/images/testimages/${team?.image}`}
          alt={`Image of ${team?.name}`}
        />
      </article>
    </section>
  );
};

export default TeamDetail;
