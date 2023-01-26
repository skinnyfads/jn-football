import mongoose from "mongoose";

const baseLeagueSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  type: {
    type: {
      mode: { type: String, enum: ["random", "highestRank", "lowestRank"], required: true },
      maxTeam: { type: Number, required: true },
      strength: { type: String, enum: ["normal", "same"], required: true },
    },
    required: true,
  },
  jnfa: { type: Boolean, required: true },
});
const BaseLeague = mongoose.model("baseLeague", baseLeagueSchema);

export default BaseLeague;
