import { FC } from "react";
import { Card } from "react-bootstrap";

import { ITeam } from "../../interfaces/Interfaces";

const TeamRow: FC<ITeam> = ({ id, name, image, est, city, country }) => {
  return (
    <div>
      <Card className="m-2 border border-5 rounded">
        <Card.Body className="p-0">
          <Card.Img
            src={`https://localhost:5001/images/testimages/${image}`}
            height="250px"
            className="py-2"
          />
          <div className="bg-light w-100 p-2">
            <Card.Title className="text-center text-dark">{name}</Card.Title>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TeamRow;
