import { Avatar, Button, Text, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineSmile } from "react-icons/ai";
import ChatInput from "./Chat/ChatInput";
import ChatDescription from "./Chat/ChatDescription";
import { ChatState } from "../Context/ChatProvider";
import { getSender } from "../config/ChatLogics";
import UpdateGroupChatModel from "./Chat/UpdateGroupChatModel";
interface Props {
  fetchAgain: boolean;
  setFetchAgain: any;
}

const ChatRoom = ({ fetchAgain, setFetchAgain }: Props) => {
  const { user, selectedChat, setSelectedChat }: any = ChatState();
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div className="flex flex-col border-r-2 border-gray-200 h-screen ">
      {selectedChat ? (
        <>
          <div
            className="flex flex-1 items-center justify-between pt-2 pr-4 pb-2 fixed top-13 border-b-2 border-gray-200"
            style={{ width: "60%" }}
          >
            {!selectedChat.isGroupChat ? (
              <>
                <div className="flex space-x-2 items-center p-2">
                  <Avatar
                    size="md"
                    name="Prosper Otemuyiwa"
                    src="https://bit.ly/prosper-baba"
                  />
                  <Text className="font-medium ">{getSender(user,selectedChat.users)}</Text>
                </div>
                <div>
                  <BsThreeDots className="h-6 w-6 " />
                </div>
              </>
            ) : (
              <>
                <div className="flex space-x-2 items-center p-2">
                  <Avatar
                    size="md"
                    name="Prosper Otemuyiwa"
                    src="https://bit.ly/prosper-baba"
                  />
                  <Text className="font-medium uppercase">{selectedChat.chatName}</Text>
                </div>
                <div>
                  <BsThreeDots className="h-6 w-6 cursor-pointer" onClick={onOpen}/>
                  <UpdateGroupChatModel onOpen={onOpen} isOpen={isOpen} onClose={onClose} fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}/>
                </div>
              </>
            )}
          </div>
          <ChatDescription
            fetchAgain={fetchAgain}
            setFetchAgian={setFetchAgain}
          />
          <ChatInput />
        </>
      ) : (
        <div
          className="flex flex-1 items-center justify-between pt-2 pr-4 pb-2 fixed top-13 border-b-2 border-gray-200"
          style={{ width: "100%" }}
        >
          <h1>Please Select a chat to comminucate</h1>
        </div>
      )}
    </div>
  );
};

export default ChatRoom;
