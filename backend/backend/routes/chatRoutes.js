import express from "express";
import { accessChat,fetchChat,createGroupChat,renameGroup,removeFromGroup,addToGroup } from "../controllers/chatController.js";
import { protect } from "./../middleware/authMiddleWare.js";
const router = express.Router();

router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChat);
router.route("/group").post(protect, createGroupChat);
router.route("/rename").put(protect, renameGroup);
router.route("/groupadd").put(protect, addToGroup);
router.route("/groupremove").put(protect, removeFromGroup);

export default router;
