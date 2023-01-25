import mongoose from "mongoose";

type ObjectId = mongoose.Types.ObjectId;

export interface IMatch {
  league: ObjectId;
  homeTeamName: string;
  awayTeamName: string;
  homeTeamScore?: number;
  awayTeamScore?: number;
  done: boolean;
}

export interface ILeague {
  baseLeague: ObjectId;
  year: number;
  participants: ObjectId[];
}
