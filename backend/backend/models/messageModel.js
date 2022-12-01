import mongoose from "mongoose";

const messageModel = mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    content: { type: String, trin: true },
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "chat" },
  },
  {
    timestamp: true,
  }
);

const Message = mongoose.model("MEssage", messageModel);

export default Message;
