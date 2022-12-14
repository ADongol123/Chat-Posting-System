import express from "express";
import Chats from "./backend/data/data.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./backend/routes/userRoutes.js";
import chatRoutes from "./backend/routes/chatRoutes.js";
import messageRoutes from "./backend/routes/messageRoutes.js"

import {
  errorhandler,
  notFound,
} from "./backend/middleware/errorMiddleware.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json()); // to accept json data

app.get("/", (req, res) => {
  res.send("API is runningon the port");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);
app.use(notFound);
app.use(errorhandler);

const PORT = process.env.PORT;
app.listen(PORT, console.log(`Server Running on port ${PORT}`));
