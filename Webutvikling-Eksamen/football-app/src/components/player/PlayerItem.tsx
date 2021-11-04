import { FC } from "react";
import { IPlayer } from "../../interfaces/Interfaces";

const PlayerItem: FC<IPlayer> = ({
  id,
  name,
  age,
  image,
  nationality,
  team,
}) => {
  return (
    <article>
      <h1>{name}</h1>
      <h3>Age: {age}</h3>
      <img src={`https://localhost:5001/images/liverpool/${image}`} />
    </article>
  );
};

export default PlayerItem;
