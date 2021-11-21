import { FC } from "react";

export type Props = {
  image?: string;
};

const TeamImage: FC<Props> = ({ image }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={`https://localhost:5001/images/testimages/${image}`}
        height="250px"
        style={{ maxHeight: "70%" }}
        alt="teams-image"
      />
    </div>
  );
};

export default TeamImage;
