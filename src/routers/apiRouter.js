import express from "express";
import {
  createComment,
  registerView,
  deleteComment,
} from "../controllers/videoController";

const apiRouter = express.Router();

apiRouter.post("/videos/:id/views", registerView);
apiRouter.post("/videos/:id/comment", createComment);
apiRouter.post("/video/:videoId/comment/:commentId/delete", deleteComment);

export default apiRouter;
