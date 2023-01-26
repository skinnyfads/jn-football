import Team from "../models/Team.js";

async function getNumericId(): Promise<number> {
  const numericId = Math.floor(Date.now() * Math.random());
  const exist = await Team.findOne({ numericId });

  if (exist) return getNumericId();
  return numericId;
}

export default getNumericId;
