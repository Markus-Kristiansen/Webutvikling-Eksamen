import { FC } from "react";
import { Card } from "react-bootstrap";
import { IPlayer } from "../../interfaces/Interfaces";

const PlayerRow: FC<IPlayer> = ({
  id,
  age,
  name,
  image,
  team,
  nationality,
  teamIcon,
}) => {
  return (
    <div>
      <Card className="m-2 border border-5 rounded">
        <Card.Body className="p-0">
          <Card.Img src={`https://localhost:5001/images/${team}/${image}`} />
          <div className="bg-light w-100 p-2">
            <Card.Title className="text-center text-dark">{name}</Card.Title>
            <Card.Text className="text-dark">Age: {age}</Card.Text>
            <Card.Text className="text-dark">Team: {team}</Card.Text>
            <img
              src={`https://localhost:5001/images/testimages/${teamIcon}`}
              height="20"
            />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PlayerRow;
