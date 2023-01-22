import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  strength: { type: Number, required: true },
  points: { type: [Number], required: true },
  numericId: { type: Number, required: true, unique: true },
  tier: { type: Number, required: true },
});
const Team = mongoose.model("team", teamSchema);

export default Team;
