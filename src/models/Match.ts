import mongoose from "mongoose";

const ObjectId = mongoose.Schema.Types.ObjectId;

const matchSchema = new mongoose.Schema({
  league: { type: ObjectId, ref: "league", required: true },
  homeTeamName: { type: String, required: true },
  awayTeamName: { type: String, required: true },
  homeTeamScore: { type: Number, required: true },
  awayTeamScore: { type: Number, required: true },
  done: { type: Boolean, required: true },
});
const Match = mongoose.model("match", matchSchema);

export default Match;
