import express from "express";
import urlsRouter from "./routes/urls.js";
import indexRouter from "./routes/index.js";
import cors from "cors";

const app = express();

// CORS
app.use(cors());

// JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Router
app.use("/", indexRouter);
app.use("/api", urlsRouter);

export default app;