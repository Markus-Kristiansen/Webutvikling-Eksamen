import { FC } from "react";

export type Props = {
  image?: string;
};

const TeamImage: FC<Props> = ({ image }) => {
  return (
    <div style={{ margin: "auto" }}>
      <img
        src={`https://localhost:5001/images/testimages/${image}`}
        style={{
          alignItems: "center",
          margin: "auto",
          display: "block",
          minWidth: 0,
        }}
        height="250px"
        alt="teams-image"
      />
    </div>
  );
};

export default TeamImage;
