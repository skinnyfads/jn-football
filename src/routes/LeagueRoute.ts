import { Router } from "express";
import LeagueController from "../controllers/LeagueController.js";

const LeagueRoute = Router();

LeagueRoute.post("/start", LeagueController.start);

export default LeagueRoute;
