import User from "../models/User";
import bcrypt from "bcrypt";

export const getJoin = (req, res) => {
  return res.render("users/join", { pageTitle: "Join" });
};
export const postJoin = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;
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
export const logout = (req, res) => {
  req.session.loggedIn = false;
  req.session.user = {};
  return res.redirect("/");
};
export const profile = (req, res) => {
  return res.render("users/profile", { pageTitle: "User Profile" });
};
export const getEdit = (req, res) => {
  return res.render("users/edit", { pageTitle: "Profile Edit" });
};
export const postEdit = async (req, res) => {
  const {
    session: {
      user: { _id },
    },
    body: { username, email, confirmEmail },
  } = req;
  if (email !== confirmEmail) {
    res.render("users/edit", {
      pageTitle: "Profile Edit",
      errorMessage: "E-mail is not correct",
    });
  }
  const user = await User.findByIdAndUpdate(_id, {
    username,
    email,
    confirmEmail,
  });

  req.session.user = user;
  return res.redirect("/users/profile");
};
export const getPassEdit = (req, res) => {
  return res.render("users/passedit", { pageTitle: "Password Edit" });
};
export const postPassEdit = async (req, res) => {
  const {
    session: {
      user: { _id },
    },
    body: { currentPassword, newPassword, confirmPassword },
  } = req;
  const userData = await User.findById(_id);
  const ok = await bcrypt.compare(currentPassword, userData.password);
  if (!ok) {
    return res.render("users/passedit", {
      pageTitle: "Password Edit",
      errorMessage: "Current Password is not correct",
    });
  }
  if (newPassword !== confirmPassword) {
    return res.status(400).render("users/passedit", {
      pageTitle: "Password Edit",
      errorMessage: "New Password is not same as Confirm Password",
    });
  }
  if (currentPassword === newPassword) {
    return res.status(400).render("users/passedit", {
      pageTitle: "Password Edit",
      errorMessage: "New Password & Current Password are same",
    });
  }
  userData.password = newPassword;
  await userData.save();
  return res.redirect("/users/profile");
};
