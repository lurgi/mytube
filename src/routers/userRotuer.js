import express from "express";
import {
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  profile,
  getEdit,
  postEdit,
  logout,
  getPassEdit,
  postPassEdit,
} from "../controllers/userController";
import { protectorMiddleware, publicOnlyMiddleware } from "../middleware";

const userRotuer = express.Router();

userRotuer.route("/join").all(publicOnlyMiddleware).get(getJoin).post(postJoin);
userRotuer
  .route("/login")
  .all(publicOnlyMiddleware)
  .get(getLogin)
  .post(postLogin);
userRotuer.route("/logout").all(protectorMiddleware).get(logout);
userRotuer.get("/profile", protectorMiddleware, profile);
userRotuer
  .route("/profile/edit")
  .all(protectorMiddleware)
  .get(getEdit)
  .post(postEdit);
userRotuer
  .route("/profile/passedit")
  .all(protectorMiddleware)
  .get(getPassEdit)
  .post(postPassEdit);

export default userRotuer;
