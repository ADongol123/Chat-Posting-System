import express from "express";
import Chats from "./backend/data/data.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./backend/routes/userRoutes.js";
import chatRoutes from "./backend/routes/chatRoutes.js";
import messageRoutes from "./backend/routes/messageRoutes.js";
import { createRequire } from "module";
import {
  errorhandler,
  notFound,
} from "./backend/middleware/errorMiddleware.js";

const require = createRequire(import.meta.url);
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
const server = app.listen(PORT, console.log(`Server Running on port ${PORT}`));

//connection establishment
const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  console.log("connected to socket io");
  socket.on("setup", (userData) => {
    socket.join(userData?._id); //created a uniqe room
    socket.emit("conencted");
  });

  socket.on("join chat", (room) => {
    socket.join(room); //user will join the chat rrom
    console.log(`${room} was joined`);
  });
  
  socket.on("typing", (room) => socket.in(room).emit("typing"));
  socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

  socket.on("new message", (newMessageReceived) => {
    var chat = newMessageReceived.chat;

    if (!chat.users) return console.log("chat users not defined");

    chat.users.forEach((user) => {
      if (user._id === newMessageReceived.sender._id) return;
      socket.in(user._id).emit("message received", newMessageReceived);
    });
  });
});
