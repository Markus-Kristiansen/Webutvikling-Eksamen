import { FC } from "react";
import { Link } from "react-router-dom";
import { IPlayer } from "../../interfaces/Interfaces";
import PlayerRow from "./PlayerRow";

const PlayerTable: FC<IPlayer> = ({
  id,
  name,
  image,
  team,
  age,
  nationality,
  teamIcon,
}) => {
  return (
    <Link to={`/player-info/${id}`} style={{ textDecoration: "none" }}>
      <PlayerRow
        id={id}
        name={name}
        image={image}
        team={team}
        age={age}
        nationality={nationality}
        teamIcon={teamIcon}
      />
    </Link>
  );
};

export default PlayerTable;
