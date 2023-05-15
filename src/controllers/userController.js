import User from "../models/User";
import bcrypt from "bcrypt";

export const getJoin = (req, res) => {
  return res.render("users/join", { pageTitle: "Join" });
};
export const postJoin = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;
  console.log(username, email, password, confirmPassword);
  if (password !== confirmPassword) {
    return res.status(400).render("users/join", {
      pageTitle: "Join",
      errorMessage: "Password confirmation does not match",
    });
  }
  const exist = await User.exists({ $or: [{ username }, { email }] });
  if (exist) {
    return res.status(400).render("users/join", {
      pageTitle: "Join",
      errorMessage: "This Username/E-mail is already used",
    });
  }
  await User.create({
    username,
    email,
    password,
  });
  return res.redirect("login");
};
export const getLogin = (req, res) => {
  return res.render("users/login", { pageTitle: "Login" });
};
export const postLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({
    email,
  });
  if (!user) {
    return res.status(400).render("users/login", {
      pageTitle: "Login",
      errorMessage: "User not found",
    });
  }
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    return res.status(400).render("users/login", {
      pageTitle: "Login",
      errorMessage: "Password is incorrect",
    });
  }
  req.session.loggedIn = true;
  req.session.user = user;
  return res.redirect("/");
};
export const profile = (req, res) => {
  return res.send("<h1>User</h1>");
};
export const edit = (req, res) => {
  return res.send("<h1>profile</h1>");
};
export const passedit = (req, res) => {
  return res.send("<h1>passedit</h1>");
};
