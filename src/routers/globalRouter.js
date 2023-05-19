import express from "express";
import { home, search } from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.route("/").get(home).post(search);
globalRouter.get("/search", search);

export default globalRouter;
