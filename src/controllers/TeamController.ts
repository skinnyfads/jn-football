import { Request, Response } from "express";
import getNumericId from "../fns/getNumericId.js";
import getRandomNumber from "../fns/getRandomNumber.js";
import setTier from "../fns/setTier.js";
import Team from "../models/Team.js";

async function create(req: Request, res: Response) {
  const { name } = req.body;

  if (!name) {
    return res.status(400).send({ message: "Some keys is missing" });
  }
  return res.send(
    await new Team({
      name,
      strength: getRandomNumber(1, 20),
      points: 0,
      numericId: await getNumericId(),
      tier: await setTier(),
    }).save()
  );
}

export default { create };
