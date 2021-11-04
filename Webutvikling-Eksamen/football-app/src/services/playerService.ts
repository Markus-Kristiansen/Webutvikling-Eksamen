import axios from "axios";
import { IPlayer } from "../interfaces/Interfaces";


export const playerService = (function() {

    // Getting a list of all players
    const getAllPlayers = async () => {
        const res = await axios.get("https://localhost:5001/player");
        return res.data as IPlayer[];
    };

    // Getting a specific player



    return { getAllPlayers }

}())