import axios from "axios";
import { IOnePlayer, IPlayer } from "../interfaces/Interfaces";


export const playerService = (function() {

    const urlToPlayerController = "https://localhost:5001/player";
    const urlToPlayerImageUploadController = "https://localhost:5001/PlayerImageUpload/SaveImage";


    // Getting a list of all players
    const getAllPlayers = async () => {
        const res = await axios.get(urlToPlayerController);
        return res.data as IPlayer[];
    };

    const getAllPlayersOne = async () => {
        const res = await axios.get("https://localhost:5001/player");
        return res.data as IOnePlayer[];
    };

    // Getting a specific player
    const getPlayerById = async (id: string) => {
        const res = await axios.get(`https://localhost:5001/player/${id}`);
        return res.data as IPlayer;
    };

    const deletePlayerById = (id: string) => {
        axios.delete(`https://localhost:5001/player/${id}`);
    };

    const postPlayer = ( newPlayer: IPlayer, image: File ) => {
        let formData = new FormData();
        formData.append( "file", image );
        axios.post( urlToPlayerController, newPlayer );
        axios({
            url: urlToPlayerImageUploadController,
            method: "POST",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" }
        })
    }


    return { getAllPlayers, getAllPlayersOne, getPlayerById, deletePlayerById, postPlayer }

}())