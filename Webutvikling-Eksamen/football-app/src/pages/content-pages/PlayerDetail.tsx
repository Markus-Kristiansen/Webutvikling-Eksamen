import { FC, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { PlayerContext } from "../../contexts/player/PlayerContext";
import { IPlayer } from "../../interfaces/Interfaces";
import { playerService } from "../../services/playerService";
import { PlayerContextType } from "../../types/PlayerContextType";
import SettingsIcon from "@mui/icons-material/Settings";
import ModalCard from "../../components/Modal";
import PlayerCarousel from "../../components/player-detail/PlayerCarousel";
import PlayerInfoBox from "../../components/player-detail/PlayerInfoBox";

const PlayerDetail: FC = () => {
  const { id } = useParams();

  const [player, setPlayer] = useState<IPlayer>();
  const { getPlayerById } = useContext(PlayerContext) as PlayerContextType;

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  useEffect(() => {
    if (id) {
      const _player = getPlayerById(id);
      setPlayer(_player);
    }
    console.log(player);
  });

  return (
    <div
      className="container"
      style={{ border: "4px dotted teal", backgroundColor: "#E9ECF5" }}
    >
      <ModalCard
        show={showModal}
        onHide={() => setShowModal(false)}
        id={player?.id}
      />
      <div
        className="row border border-danger"
        style={{ border: "5px solid red" }}
      >
        <div
          className="d-sm-none"
          style={{ display: "flex", justifyContent: "end", padding: 5 }}
        >
          <SettingsIcon
            onClick={openModal}
            className="d-block d-sm-none"
            style={{
              border: "1px solid black",
              color: "#98b6bb",
              display: "inline-block",
            }}
          />
        </div>
        <div
          className="hidden-xs col-lg-4 col-md-4 col-sm-12 col-xs-12"
          style={{ border: "2px dotted yellow" }}
        >
          <PlayerInfoBox
            image={player?.image!}
            team={player?.team!}
            teamIcon={player?.teamIcon!}
            age={player?.age!}
            nationality={player?.nationality!}
            name={player?.name!}
          />
        </div>
        <div
          className="my-auto mx-auto col-lg-8 col-md-8 col-sm-12 col-xs-12"
          style={{ border: "2px dotted green", height: 320 }}
        >
          <div
            className="d-xs-none"
            style={{
              padding: 5,
              border: "1px solid red",
              display: "flex",
              justifyContent: "end",
            }}
          >
            <SettingsIcon
              onClick={openModal}
              className="d-none d-sm-block"
              style={{
                border: "1px solid black",
                color: "#98b6bb",
                display: "inline-block",
              }}
            />
          </div>
          <div
            className="border border-warning"
            style={{ marginTop: 20, height: 250, overflowY: "auto" }}
          >
            <h3
              style={{
                textAlign: "center",
                textDecoration: "underline",
                textDecorationColor: "gray",
              }}
            >
              {player?.name}
            </h3>
            <p style={{ padding: 10 }}>{player?.biography}</p>
          </div>
        </div>
      </div>
      <div className="row" style={{ height: 100, backgroundColor: "white" }}>
        <div className="col">No content</div>
      </div>
      <div
        className="row justify-content-center"
        style={{ border: "1px dotted teal" }}
      >
        <div
          className="col-lg-8 col-md-8 col-sm-8 col-xs-8"
          style={{ border: "2px dotted yellow", backgroundColor: "gray" }}
        >
          <PlayerCarousel team={player?.team!} id={player?.id!} />
        </div>
      </div>
    </div>
  );
};

export default PlayerDetail;
