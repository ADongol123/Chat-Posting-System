import {
  Avatar,
  Box,
  Button,
  IconButton,
  Spinner,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineSmile } from "react-icons/ai";
import ChatInput from "./Chat/ChatInput";
import ChatDescription from "./Chat/ChatDescription";
import { ChatState } from "../Context/ChatProvider";
import { getSender } from "../config/ChatLogics";
import UpdateGroupChatModel from "./Chat/UpdateGroupChatModel";
import { AiOutlineArrowLeft } from "react-icons/ai";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
interface Props {
  fetchAgain: boolean;
  setFetchAgain: any;
  messages: any;
  setMessages: any;
}

const ENDPOINT = "http://localhost:5000";
var socket, selectedChatCompare;
const ChatRoom = ({
  fetchAgain,
  setFetchAgain,
  setMessages,
  messages,
}: Props) => {
  const { user, selectedChat, setSelectedChat }: any = ChatState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);

  return (
    <Box
      display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={1}
      bg="white"
      w={{ base: "100%", md: "68%" }}
    >
      {selectedChat ? (
        <div className="w-full">
          <IconButton
            aria-label=""
            display={{ base: "flex", md: "none" }}
            icon={<AiOutlineArrowLeft />}
            zIndex="9999"
            onClick={() => setSelectedChat("")}
          />
          <div className="flex items-center justify-between pt-2 pr-4 pb-2 border-b-2 border-gray-200">
            {!selectedChat.isGroupChat ? (
              <>
                <div className="flex space-x-2 items-center p-2">
                  <Avatar
                    size="md"
                    name="Prosper Otemuyiwa"
                    src="https://bit.ly/prosper-baba"
                  />
                  <Text className="font-medium ">
                    {getSender(user, selectedChat.users)}
                  </Text>
                </div>
                <div>
                  <Menu>
                    <MenuButton>
                      <BsThreeDots className="h-6 w-6 cursor-pointer" />
                    </MenuButton>
                    <MenuList zIndex="9999">
                      <MenuItem>Download</MenuItem>
                      <MenuItem>Download</MenuItem>
                    </MenuList>
                  </Menu>
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
                  <Text className="font-medium uppercase">
                    {selectedChat.chatName}
                  </Text>
                </div>
                <div>
                  <BsThreeDots
                    className="h-6 w-6 cursor-pointer"
                    onClick={onOpen}
                  />
                  <UpdateGroupChatModel
                    onOpen={onOpen}
                    isOpen={isOpen}
                    onClose={onClose}
                    fetchAgain={fetchAgain}
                    setFetchAgain={setFetchAgain}
                  />
                </div>
              </>
            )}
          </div>
          <ChatDescription
            loading={loading}
            setLoading={setLoading}
            fetchAgain={fetchAgain}
            setFetchAgian={setFetchAgain}
            messages={messages}
            setMessages={setMessages}
          />
        </div>
      ) : (
        <div className="flex items-center justify-center border-gray-200">
          <h1>Please Select a chat to comminucate</h1>
        </div>
      )}
    </Box>
  );
};

export default ChatRoom;
