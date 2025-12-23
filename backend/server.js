import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import userRoutes from "./Routes/userRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
