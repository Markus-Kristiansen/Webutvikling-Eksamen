import { FC, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlayerBioBox from "../../components/player/PlayerBioBox";
import { PlayerContext } from "../../contexts/player/PlayerContext";
import { IPlayer } from "../../interfaces/Interfaces";
import { PlayerContextType } from "../../types/PlayerContextType";

const PlayerDetail: FC = () => {
  const { id } = useParams();

  const { getPlayerById } = useContext(PlayerContext) as PlayerContextType;

  const [player, setPlayer] = useState<IPlayer>();

  useEffect(() => {
    if (id) {
      const _player = getPlayerById(id);
      setPlayer(_player);
    }
  }, []);

  return (
    <section>
      <div className="row">
        <div className="col-2 mx-auto">
          <img
            src={`https://localhost:5001/images/${player?.team}/${player?.image}`}
            alt={`Image of ${player?.name}`}
            height="300px"
          />
          <h3>{player?.name}</h3>
          <p>{player?.nationality}</p>
        </div>
        <div className="col-8 my-auto">
          <div className="mx-0">
            <PlayerBioBox biography={player?.biography} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayerDetail;
