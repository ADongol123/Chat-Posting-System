import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Stack,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { getSender } from "../config/ChatLogics";
import { ChatState } from "../Context/ChatProvider";
import ChatLoading from "./Chat/ChatLoading";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "../components/modal/modal";

interface Props {
  fetchAgain : boolean
}
const Sidebar = ({fetchAgain}:Props) => {
  const [loggedUser, setLoggeduser] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    selectedChat,
    setSelectedChat,
    user,
    chats,
    setChats,
  }: any = ChatState();
  const toast = useToast();

  const fetchChats = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.get("/api/chat", config);
      setChats(data);
    } catch (error) {
      toast({
        title: "Error Ocurred while fetching chats",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  useEffect(() => {
    const firstFetch = localStorage.getItem("userInfo");
    const secondFetch = firstFetch && JSON.parse(firstFetch);
    setLoggeduser(secondFetch);
    fetchChats();
  }, [fetchAgain]);

  return (
    <Box
    display={{ base: selectedChat ? "none" : "flex", md: "flex" }}
    flexDir="column"
    bg="white"
    w={{ base: "100%", md: "31%" }}
    borderRight="1px solid lightgray"
    >
      <div className="flex flex-col space-x-2 px-3 py-3 content-center">
        <Text className="font-medium text-base">Favourites</Text>
        <div className="flex space-x-3 my-2 h-10 w-[100%] overflow-x-auto no-scrollbar">
          {chats?.map((data: any) => (
            <Avatar size="sm" src={data.chatName} key={data._id}>
              <AvatarBadge boxSize="1.25em" bg="green.500" />
            </Avatar>
          ))}
        </div>
      </div>
      <div className="flex flex-col h-screen">
        <div className="flex justify-between items-center px-3 py-3">
          <Text className="font-medium text-base space-y-2">My Chat List</Text>
          <Button
            rightIcon={<AiOutlinePlus />}
            colorScheme="blue"
            variant="outline"
            onClick={onOpen}
          >
            Add Group
          </Button>
        </div>
        <Modal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        {chats ? (
          <div className="flex flex-col no-scrollbar overflow-y-auto h-[78%] pb-20 pl-3 pr-3 pt-3 gap-2">
            {chats.map((chat: any) => (
              <Box
                onClick={() => setSelectedChat(chat)}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                cursor="pointer"
                bg={selectedChat === chat ? "#0e8afd" : "white"}
                color={selectedChat === chat ? "white" : "black"}
                px={3}
                py={2}
                borderRadius="lg"
                key={chat._id}
                _hover={{bg:"#D3D3D3"}}
              >
                <div className="flex items-center space-x-4">
                  <Avatar
                    size="md"
                    name="Prosper Otemuyiwa"
                    src="https://bit.ly/prosper-baba"
                  />
                  <div>
                    <Text>
                      {!chat.isGroupChat
                        ? getSender(loggedUser, chat.users)
                        : chat.chatName}
                    </Text>
                    {chat.latestMessage && (
                      <Text fontSize="xs">
                        <b>{chat.latestMessage.sender.name} : </b>
                        {chat.latestMessage.content.length > 50
                          ? chat.latestMessage.content.substring(0, 51) + "..."
                          : chat.latestMessage.content}
                      </Text>
                    )}
                    <Text className="font-medium text-sm ">30Min</Text>
                  </div>
                </div>
              </Box>
            ))}
          </div>
        ) : (
          <ChatLoading />
        )}
      </div>
    </Box>
  );
};

export default Sidebar;
