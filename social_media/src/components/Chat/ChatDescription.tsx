import React, { useState, useEffect } from "react";
import { Avatar, FormControl, Input, Text, useToast } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import ChatInput from "./ChatInput";
import { ChatState } from "../../Context/ChatProvider";
import axios from "axios";
import io from "socket.io-client";
import { AiOutlineSend, AiOutlineSmile } from "react-icons/ai";
import { TiAttachment } from "react-icons/ti";
const ENDPOINT = "http://localhost:5000";
var socket, selectedChatCompare;
interface Props {
  fetchAgain: boolean;
  setFetchAgian: any;
  loading: boolean;
  setLoading: any;
}

const ChatDescription = ({
  fetchAgain,
  setFetchAgian,
  loading,
  setLoading,
}: Props) => {
  const { user, selectedChat, setSelectedChat }: any = ChatState();
  const [messages, setMessages]: any = useState([]);
  const [newMessage, setNewMessage] = useState<any>();
  const toast = useToast();
  const [socketConnected, setSocketConnected] = useState(false);
  const [typing, setTyping] = useState(false);
  const [istyping, setIsTyping] = useState(false);

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("setup", user);
    socket.on("conencted", () => setSocketConnected(true));
    socket.on("typing", () => setIsTyping(true));
    socket.on("stop typing", () => setIsTyping(false));
  }, []);

  const fetchMessages = async () => {
    if (!selectedChat) return;
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      setLoading(true);
      const { data } = await axios.get(
        `/api/message/${selectedChat._id}`,
        config
      );
      setMessages(data);
      setLoading(false);
      socket.emit("join chat", selectedChat._id);
    } catch (error) {
      toast({
        title: "Error Occured",
        description: "Failed to send the messages",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

  const sendMessage = async (e: any) => {
    if (e.key === "Enter" && newMessage) {
      socket.emit("stop typing", selectedChat._id);
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        };
        setNewMessage(" ");
        const { data } = await axios.post(
          "api/message",
          {
            content: newMessage,
            chatId: selectedChat._id,
          },
          config
        );
        socket.emit("new message", data);
        setMessages([...messages, data]);
      } catch (error) {
        toast({
          title: "Error Occured",
          description: "Failed to send the messages",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
      }
    }
  };
  const typingHandler = (e: any) => {
    setNewMessage(e.target.value);
    e.preventDefault();

    if (!socketConnected) return;
    if (!typing) {
      setTyping(true);
      socket.emit("typing", selectedChat._id);
    }

    let lastTypingTime = new Date().getTime();
    var timerLength = 3000;
    setTimeout(() => {
      var timeNow = new Date().getTime();
      var timeDiff = timeNow - lastTypingTime;

      if (timeDiff >= timerLength && typing) {
        socket.emit("stop typing", selectedChat._id);
        setTyping(false);
      }
    }, timerLength);
  };
  useEffect(() => {
    fetchMessages();
    selectedChatCompare = selectedChat;
  }, [selectedChat]);

  useEffect(() => {
    socket.on("message received", (newMessageReceived) => {
      if (
        !selectedChatCompare ||
        selectedChatCompare._id !== newMessageReceived.chat._id
      ) {
      } else {
        setMessages([...messages, newMessageReceived]);
      }
    });
  });
  return (
    <div className="w-full h-full">
      <div className="no-scrollbar overflow-y-scroll h-4/5 pl-2 pt-2 pr-2 pb-5">
        {messages?.map((details: any) => (
          <>
            {user._id === details.sender._id ? (
              <div className="flex items-center mb-4 justify-end z-0">
                <Avatar size="md" name="Prosper Otemuyiwa" src={details.pic} />
                <div className="ml-3 bg-gray-700 h-auto text-white w-auto rounded p-4">
                  <div className="flex items-center justify-between space-x-20">
                    <div className="flex items-center space-x-5">
                      <Text className="font-medium">{details.sender.name}</Text>
                      <Text className="text-xs">20mins ago</Text>
                    </div>
                    <BsThreeDots />
                  </div>
                  <Text className="text-sm">{details.content}</Text>
                </div>
              </div>
            ) : (
              <div className="flex items-center mb-4 z-0">
                <Avatar size="md" name="Prosper Otemuyiwa" src={details.pic} />
                <div className="ml-3 bg-blue-500 h-auto text-white w-auto rounded p-4">
                  <div className="flex items-center justify-between space-x-20">
                    <div className="flex items-center space-x-5">
                      <Text className="font-medium">{details.sender.name}</Text>
                      <Text className="text-xs">20mins ago</Text>
                    </div>
                    <BsThreeDots />
                  </div>
                  <Text className="text-sm">{details.content}</Text>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
      {istyping ? (
        <div className="fixed bottom-80 bg-gray-200 text-white p-3 rounded-lg">
          <div className="flex gap-4">
            <span className="bg-white rounded-full h-4 w-4"></span>
            <span className="bg-white rounded-full h-4 w-4"></span>
            <span className="bg-white rounded-full h-4 w-4"></span>
          </div>
        </div>
      ) : null}

      <div className=" flex justify-between items-center border-t-2 border-gray-200 fixed bottom-0 p-2 h-auto space-x-3 bg-white z-1000 w-[67%]">
        <AiOutlineSmile className="h-5 w-5" />
        <FormControl onKeyDown={sendMessage} display="flex" flex="1" isRequired>
          <Input
            variant="filled"
            bg="blue-400"
            onChange={typingHandler}
            value={newMessage}
          />
        </FormControl>

        <TiAttachment className="h-5 w-5" />
        <div className="bg-blue-500 rounded-lg h-8 w-8 flex justify-center items-center hover:bg-blue-400">
          <AiOutlineSend color="white" className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

export default ChatDescription;
