import { IOnePlayer, IPlayer } from "../interfaces/Interfaces";

export type PlayerContextType = {
    players: IPlayer[]
    test: IOnePlayer[]
    getPlayerById: (id: string) => IPlayer
}
