import express from "express";
import {
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  passedit,
  profile,
  edit,
} from "../controllers/userController";

const userRotuer = express.Router();

userRotuer.route("/join").get(getJoin).post(postJoin);
userRotuer.route("/login").get(getLogin).post(postLogin);
userRotuer.get("/profile", profile);
userRotuer.get("/profile/edit", edit);
userRotuer.get("/profile/passedit", passedit);

export default userRotuer;
