
export interface IPlayer {
  id?: string;
  name: string;
  age?: number;
  image: string;
  nationality?: string;
  team: string;
  biography?: string;
  teamIcon?: string;
}

export interface IOnePlayer {
  id?: string;
  name: string;
  image: string;
  team:string;
  age?: number;
  nationality: string;
}

export interface ITeam {
  id?: string;
  name: string;
  est: number;
  image: string;
  country: string;
  city: string;
}
