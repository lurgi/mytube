import express from "express";
import {
  getVideoUpload,
  postVideoEdit,
  postVideoUpload,
  videoDelete,
  getVideoEdit,
  videoWatch,
  postComment,
} from "../controllers/videoController";
import { protectorMiddleware, uploadFiles } from "../middleware";

const videoRouter = express.Router();

videoRouter
  .route("/upload")
  .all(protectorMiddleware)
  .get(getVideoUpload)
  .post(uploadFiles.single("video"), postVideoUpload);
videoRouter.route("/:id").get(videoWatch);
videoRouter
  .route("/:id/edit")
  .all(protectorMiddleware)
  .get(getVideoEdit)
  .post(postVideoEdit);
videoRouter.get("/:id/delete", protectorMiddleware, videoDelete);

export default videoRouter;
