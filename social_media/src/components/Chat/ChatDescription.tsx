import React, { useState, useEffect } from "react";
import { Avatar, Text, useToast } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import ChatInput from "./ChatInput";
import { ChatState } from "../../Context/ChatProvider";
import axios from "axios";

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
  console.log(messages, "messages");
  console.log(user, "user");
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
  useEffect(() => {
    fetchMessages();
  }, [selectedChat]);
  return (
    <>
      <div
        className="fixed top-40 overflow-y-scroll h-3/4 pl-2 pt-2 pr-2 pb-5 "
        style={{ width: "60%" }}
      >
        {messages?.map((details: any) => (
          <>
            {user._id === details.sender._id ? (
              <div className="flex items-center mb-4 justify-end">
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
              <div className="flex items-center mb-4">
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
      <ChatInput
        messages={messages}
        setMessages={setMessages}
        newMessage={newMessage}
        setNewMessage={setNewMessage}
      />
    </>
  );
};

export default ChatDescription;
