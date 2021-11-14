import { FC } from "react";
import { IPlayer } from "../../interfaces/Interfaces";

export type Props = {
  biography?: string;
};

const PlayerBioBox: FC<Props> = ({ biography }) => {
  return (
    <div className="m-auto w-50 h-50 border">
      <p>{biography}</p>
    </div>
  );
};

export default PlayerBioBox;
