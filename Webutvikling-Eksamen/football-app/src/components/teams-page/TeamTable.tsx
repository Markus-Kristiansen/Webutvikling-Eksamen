import { FC } from "react";
import { Link } from "react-router-dom";
import { ITeam } from "../../interfaces/Interfaces";
import TeamRow from "./TeamRow";

const TeamTable: FC<ITeam> = ({ id, name, image, est, country, city }) => {
  return (
    <Link to={`/team-info/${id}`} style={{ textDecoration: "none" }}>
      <div>
        <TeamRow
          id={id}
          name={name}
          image={image}
          est={est}
          country={country}
          city={city}
        />
      </div>
    </Link>
  );
};

export default TeamTable;
