interface ISchedule {
  homeTeam: ITeam;
  awayTeam: ITeam;
}

interface ITeam {
  name: string;
  strength: number;
  points: number[];
  numericId: number;
  tier: number;
}

type ITeamLeague = ITeam | undefined;

function generateLeague(teams: ITeamLeague[]) {
  const schedules: ISchedule[][] = [];
  const participants = teams.slice();

  if (participants.length % 2) {
    participants.push(undefined);
  }
  const totalRounds = participants.length;

  for (let currentWeek = 0; currentWeek < (totalRounds - 1) * 2; currentWeek++) {
    schedules[currentWeek] = [];

    for (let i = 0; i < totalRounds / 2; i++) {
      const teamA = participants[i];
      const teamB = participants[totalRounds - 1 - i];

      if (teamA && teamB) {
        if (currentWeek % 2 === 1) {
          schedules[currentWeek].push({ homeTeam: teamA, awayTeam: teamB });
        } else {
          schedules[currentWeek].push({ homeTeam: teamB, awayTeam: teamA });
        }
      }
    }
    participants.splice(1, 0, participants.pop());
  }
  return schedules;
}

export default generateLeague;
