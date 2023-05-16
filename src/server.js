import express from "express";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRotuer from "./routers/userRotuer";
import session from "express-session";
import { middleware } from "./middleware";
import MongoStore from "connect-mongo";
import "./db";

const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
  })
);
app.use((req, res, next) => {
  req.sessionStore.all((error, session) => {
    next();
  });
});
app.use("/videos/uploads", express.static("uploads"));
app.use("/dist", express.static("dist"));

app.use(middleware);
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRotuer);

export default app;
