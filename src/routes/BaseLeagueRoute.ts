import { Router } from "express";
import BaseLeagueController from "../controllers/BaseLeagueController.js";

const BaseLeagueRoute = Router();

BaseLeagueRoute.post("/create", BaseLeagueController.create);

export default BaseLeagueRoute;
