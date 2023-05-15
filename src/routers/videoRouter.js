import express from "express";
import {
  video,
  videoDelete,
  videoEdit,
  videoWatch,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/upload", video);
videoRouter.get("/:id", videoWatch);
videoRouter.get("/:id/edit", videoEdit);
videoRouter.get("/:id/delete", videoDelete);

export default videoRouter;
