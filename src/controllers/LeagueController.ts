import { Request, Response } from "express";
import config from "../config.js";
import generateLeague from "../fns/generateLeague.js";
import updateStrength from "../fns/updateStrength.js";
import { ILeague, IMatch } from "../interfaces/index.js";
import BaseLeague from "../models/BaseLeague.js";
import League from "../models/League.js";
import Match from "../models/Match.js";
import Team from "../models/Team.js";

async function start(req: Request, res: Response) {
  const jnLeague = await Team.find();
  const configDegradationDefault = config.degradation.default;
  const lastLeague = await League.find().sort({ _id: -1 }).limit(1);
  const lastYear = (lastLeague[0] || {}).year;
  const startYear = config.startYear;
  const leagues: ILeague[] = [];

  let currentTier = 0;

  while (true) {
    currentTier++;
    const teams = jnLeague.filter((team) => team.tier === currentTier);

    if (teams.length <= configDegradationDefault) {
      if (leagues.length) {
        return res.send(leagues);
      } else {
        return res.status(404).send({ message: "Insufficient number of participants" });
      }
    }
    const baseLeague = await BaseLeague.findOne({ name: "JN League" });

    if (!baseLeague) {
      return res.status(404).send({ message: "Please create base JN League first" });
    }
    for (let i = 0; i < teams.length; i++) {
      const newStrength = updateStrength(teams[i].strength);
      await Team.updateOne({ _id: teams[i]._id }, { strength: newStrength });
    }
    const league = await new League({
      baseLeague: baseLeague._id,
      year: lastYear || startYear,
      participants: teams.map((team) => team._id),
      tier: currentTier,
    }).save();
    const schedules = generateLeague(teams);
    const matches: IMatch[] = [];

    schedules.forEach((week) => {
      week.forEach((match) => {
        matches.push({
          league: league._id,
          homeTeamName: match.homeTeam.name,
          awayTeamName: match.awayTeam.name,
          done: false,
        });
      });
    });
    await Match.insertMany(matches);
    leagues.push(league);
  }
}

export default { start };
