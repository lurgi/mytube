import express from "express";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRotuer from "./routers/userRotuer";
import session from "express-session";
import { middleware } from "./middleware";
import "./db";

const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "Hello!",
    resave: true,
    saveUninitialized: true,
  })
);
app.use((req, res, next) => {
  req.sessionStore.all((error, session) => {
    next();
  });
});

app.use(middleware);
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRotuer);

export default app;
