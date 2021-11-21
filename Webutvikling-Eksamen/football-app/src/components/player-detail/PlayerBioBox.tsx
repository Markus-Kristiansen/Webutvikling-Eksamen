import { FC } from "react";
import { IPlayer } from "../../interfaces/Interfaces";

export type Props = {
  biography?: string;
};

const PlayerBioBox: FC<Props> = ({ biography }) => {
  return (
    <div className="border">
      <p>{biography}</p>
    </div>
  );
};

export default PlayerBioBox;
