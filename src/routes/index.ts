import { Router } from "express";
import LeagueRoute from "./LeagueRoute.js";

const routes = Router();

routes.use("/leagues", LeagueRoute);

export default routes;
