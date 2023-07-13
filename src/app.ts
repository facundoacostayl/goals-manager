import express from "express";
import cors from "cors";
import { router } from "./routes/index.route";

const app = express();
const port = process.env.PORT || 4000;

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/1.0", router);

export { app, port };
