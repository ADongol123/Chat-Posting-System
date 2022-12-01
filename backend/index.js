import express from "express";
import Chats from "./backend/data/data.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./backend/routes/userRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json()); // to accept json data

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/user", userRoutes);

const PORT = process.env.PORT;
app.listen(PORT, console.log(`Server Running on port ${PORT}`));
