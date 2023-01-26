import { Router } from "express";
import TeamController from "../controllers/TeamController.js";

const TeamRoute = Router();

TeamRoute.post("/create", TeamController.create);

export default TeamRoute;
