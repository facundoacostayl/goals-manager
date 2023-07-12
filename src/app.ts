import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 4000;

//Middlewares
app.use(cors());
app.use(express.json());

export { app, port };
