import { FC } from "react";
import { Card } from "react-bootstrap";
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
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Age: {age}</Card.Text>
        <Card.Img src={`https://localhost:5001/images/liverpool/${image}`} />
      </Card.Body>
    </Card>
  );
};

export default PlayerItem;
