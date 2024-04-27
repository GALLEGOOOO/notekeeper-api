import cors from "cors";
import express from "express";

import { healthRouter, notesRouter } from "./src/router/index.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/health", healthRouter);
app.use("/notes", notesRouter);

const PORT = process.env.PORT ?? 3001;

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}...`);
});