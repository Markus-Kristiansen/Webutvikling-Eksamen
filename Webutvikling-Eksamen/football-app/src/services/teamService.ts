import axios from "axios";
import { ITeam } from "../interfaces/Interfaces";


export const teamService = (function(){

    const urlToTeamController = "https://localhost:5001/team";

    const getAllTeams = async () => {
        const res = await axios.get(urlToTeamController);
        return res.data as ITeam[];
    }

    return { getAllTeams }


}())