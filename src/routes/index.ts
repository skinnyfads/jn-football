import { Router } from "express";
import BaseLeagueRoute from "./BaseLeagueRoute.js";
import LeagueRoute from "./LeagueRoute.js";
import TeamRoute from "./TeamRoute.js";

const routes = Router();

routes.use("/leagues", LeagueRoute);
routes.use("/teams", TeamRoute);
routes.use("/baseLeagues", BaseLeagueRoute);

export default routes;
