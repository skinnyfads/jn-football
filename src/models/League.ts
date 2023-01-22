import mongoose from "mongoose";

const ObjectId = mongoose.Schema.Types.ObjectId;

const leagueSchema = new mongoose.Schema({
  baseLeague: { type: ObjectId, ref: "baseLeague", required: true },
  year: { type: Number, required: true },
  participants: [{ type: ObjectId, ref: "team", required: true }],
});
const League = mongoose.model("league", leagueSchema);

export default League;
