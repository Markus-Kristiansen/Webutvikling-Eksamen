import { url } from "inspector";
import { FC, useContext, useEffect, useState } from "react";
import { Card, Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";
import PlayerBioBox from "../../components/player/PlayerBioBox";
import { PlayerContext } from "../../contexts/player/PlayerContext";
import { IPlayer } from "../../interfaces/Interfaces";
import { playerService } from "../../services/playerService";
import { PlayerContextType } from "../../types/PlayerContextType";
import SettingsIcon from "@mui/icons-material/Settings";
import ModalCard from "../../components/Modal";

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
          <div
            className="border border-bottom-0"
            style={{
              backgroundColor: "#f5f5f5",
              backgroundImage: `url(https://localhost:5001/images/testimages/${player?.teamIcon})`,
              backgroundRepeat: "no-repeat",
            }}
          >
            <img
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              src={`https://localhost:5001/images/${player?.team}/${player?.image}`}
              alt={`${player?.name}`}
              height="200px"
            />
          </div>
          <div
            className="border border-top-0"
            style={{ backgroundColor: "#F5F5F5", paddingLeft: 10 }}
          >
            <p>
              <b>Age:</b> {player?.age}
              <br></br>
              <b>Born in:</b> {player?.nationality}
            </p>

            <h3>Honours:</h3>
            <ul
              style={{
                listStyleImage: `url(https://localhost:5001/images/testimages/${player?.teamIcon})`,
              }}
            >
              <li>Premier League</li>
              <li>Champions League</li>
              <li>Top Scorer Premier League</li>
              <li>Most Scoring African PL Player</li>
            </ul>
          </div>
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
          <h1>Row2 col1</h1>
          <Carousel variant="dark">
            <Carousel.Item>
              <img
                className="d-block w-50 mx-auto"
                src={`https://localhost:5001/images/Chelsea%20FC/mason-mount.png`}
                alt="First slide"
              />
              <Carousel.Caption>
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-50 mx-auto"
                src={`https://localhost:5001/images/Liverpool%20FC/mohammed-salah.png`}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-50 mx-auto"
                src={`https://localhost:5001/images/Liverpool%20FC/roberto-firmino.png`}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default PlayerDetail;
