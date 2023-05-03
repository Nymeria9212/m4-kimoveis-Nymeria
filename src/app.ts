import "reflect-metadata";
import "express-async-errors";
import express from "express";
import userRouter from "./routes/users.router";
import loginRouter from "./routes/login.router";
import categoriesRouter from "./routes/categories.router";
import schedulesRouter from "./routes/schedules.router";
import realStateRouter from "./routes/realState.router";

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/login", loginRouter);
app.use("/categories", categoriesRouter);
app.use("/realEstate", realStateRouter);
app.use("/schedules", schedulesRouter);

export default app;
