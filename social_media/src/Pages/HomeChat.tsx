import { Box, Stack, Text } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import PersonalInfo from "../components/PersonalInfo";
import Header from "../components/Header";
import ChatRoom from "../components/ChatRoom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserLogin } from "../features/User/userSlice";
import { useNavigate } from "react-router-dom";
import { ChatState } from "../Context/ChatProvider";
import { io } from "socket.io-client";
const ENDPOINT = "http://localhost:5000";
var socket, selectedChatCompare;

const HomeChat = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [message, setMessage] = useState([]);
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user, notification, setNotification }: any = ChatState();
  const [messages, setMessages] = useState<any>([]);
  const [socketConnected, setSocketConnected] = useState(false);
  const [typing, setTyping] = useState(false);
  const [istyping, setIsTyping] = useState(false);
  console.log(notification, "notification");
  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("setup", user);
    socket.on("conencted", () => setSocketConnected(true));
    socket.on("typing", () => setIsTyping(true));
    socket.on("stop typing", () => setIsTyping(false));
  }, []);

  useEffect(() => {
    socket.on("message received", (newMessageReceived) => {
      console.log(notification, "newMessageReceived");
      if (
        !selectedChatCompare ||
        selectedChatCompare._id !== newMessageReceived.chat._id
      ) {
        if (!notification.includes(newMessageReceived)) {
          setNotification([newMessageReceived, ...notification]);
          setFetchAgain(!fetchAgain);
        }
      } else {
        setMessages([...messages, newMessageReceived]);
      }
    });
  }, [setMessages, setNotification, notification]);
  return (
    <>
      {!user ? (
        navigate("/")
      ) : (
        <div style={{ width: "100%" }}>
          <Header />
          <Box
            display="flex"
            justifyContent="space-between"
            w="100%"
            h="100%"
            p="10px"
          >
            <Sidebar fetchAgain={fetchAgain} />
            <ChatRoom fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} messages={messages} setMessages={setMessages}/>
          </Box>
        </div>
      )}
    </>
  );
};

export default HomeChat;
