import { FC } from "react";
import { Card } from "react-bootstrap";
import { IPlayer } from "../../interfaces/Interfaces";

const PlayerCard: FC<IPlayer> = ({
  id,
  name,
  age,
  image,
  nationality,
  team,
  clicked,
}) => {
  return (
    <div onClick={() => clicked(id)}>
      <Card className="m-2 border border-5 rounded">
        <Card.Body className="p-0">
          <Card.Img src={`https://localhost:5001/images/${team}/${image}`} />
          <div className="bg-light w-100 p-2">
            <Card.Title className="text-center text-dark">{name}</Card.Title>
            <Card.Text className="text-dark">Age: {age}</Card.Text>
            <Card.Text className="text-dark">Team: {team}</Card.Text>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PlayerCard;
