import Team from "../models/Team.js";
import config from "../config.js";

async function setTier() {
  let currentTier = 0;
  const configTotalTeams = config.totalTeams;

  while (true) {
    currentTier++;

    const teams = await Team.find({ tier: currentTier });
    const maxTotalTeam = configTotalTeams[currentTier as keyof typeof config.totalTeams] || configTotalTeams.default;

    if (teams.length < maxTotalTeam) {
      return currentTier;
    }
  }
}

export default setTier;
