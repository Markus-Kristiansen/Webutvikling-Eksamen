import { FC } from "react";
import { Card } from "react-bootstrap";
import { ITeam } from "../../interfaces/Interfaces";

const TeamItem: FC<ITeam> = ({ id, name, image, est, country, city }) => {
  return (
    <Card className="m-2 border border-5 rounded">
      <Card.Body className="p-0">
        <Card.Img
          height="250px"
          src={`https://localhost:5001/images/testimages/${image}`}
          className="py-2"
        />
        <div className="bg-light w-100 p-2">
          <Card.Title className="text-center">{name}</Card.Title>
          <Card.Text>Est: {est}</Card.Text>
          <Card.Text>City: {city}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TeamItem;
