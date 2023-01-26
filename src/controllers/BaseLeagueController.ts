import { Request, Response } from "express";
import BaseLeague from "../models/BaseLeague.js";

async function create(req: Request, res: Response) {
  const { name, jnfa } = req.body;

  if (!name) {
    return res.status(400).send({ message: "Some keys is missing" });
  }
  return res.send(
    await new BaseLeague({
      name,
      jnfa: Boolean(jnfa),
    }).save()
  );
}

export default { create };
