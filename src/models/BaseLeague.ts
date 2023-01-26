import mongoose from "mongoose";

const baseLeagueSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  jnfa: { type: Boolean, required: true },
});
const BaseLeague = mongoose.model("baseLeague", baseLeagueSchema);

export default BaseLeague;
