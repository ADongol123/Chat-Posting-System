import React, { useState } from "react";
import {
  Avatar,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  AvatarBadge,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Toast,
  useToast,
} from "@chakra-ui/react";
import { AiOutlineSearch, AiOutlineBell } from "react-icons/ai";
import { auth } from "../firebase";
import { useSelector } from "react-redux";
import {
  selectUserPhoto,
  selectUserName,
  selectUserloggedIn,
  selectUserId,
} from "./../features/User/userSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ChatLoading from "./Chat/ChatLoading";
import UserList from "./Chat/UserList";
import { ChatState } from "../Context/ChatProvider";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);
  const toast = useToast();

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  const {
    setSelectedChat,
    user,
    notification,
    setNotification,
    chats,
    setChats,
  }: any = ChatState();

  const handleSearch = async (e:any) => {
    e.preventDefault();
    if (!search) {
      toast({
        title: "Please Enter something in search",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
      return;
    }
    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.get(`/api/user/?search=${search}`, config);

      setLoading(false);
      setSearchResult(data);
    } catch (error) {
      toast({
        title: "Error Occured",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  const accessChat = async (userId: string) => {
    try {
      setLoadingChat(true);
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.post(`/api/chat`, { userId }, config);
      if(!chats.find((value :any) => value._id === data._id)) setChats([data,...chats])

      setSelectedChat(data)
      setLoadingChat(false)
      onClose()
    } catch (error) {
      toast({
        title: "Error Fetchin th Chat",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };
  return (
    <Stack
      direction="row"
      p="2"
      borderBottom="1px solid lightgray"
      className="sticky top-0 bg-white z-1000"
    >
      <Stack
        direction="row"
        alignItems="center"
        flex="1"
        pl="2"
        border="1px solid lightgray"
        borderRadius="10px"
        onClick={onOpen}
      >
        <AiOutlineSearch color="gray.300" />
        <Text>Search Here ...</Text>
      </Stack>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Search For Users</DrawerHeader>
          <DrawerBody>
            <form  onSubmit={handleSearch}>
              <Stack direction="row" spacing="0">
                <Input
                  placeholder="Search by name or email"
                  mr={2}
                  flex={1}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <Button type="submit">Search</Button>
              </Stack>
            </form>
            {loading ? (
              <ChatLoading />
            ) : (
              searchResult?.map((user: any) => (
                <UserList
                  key={user._id}
                  user={user}
                  handleFunction={() => accessChat(user._id)}
                />
              ))
            )}
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Stack>
        <IconButton
          colorScheme="blue"
          aria-label="Call Segun"
          variant="outlined"
          size="lg"
          icon={<AiOutlineBell />}
        />
        <Stack
          position="absolute"
          justifyContent="center"
          bg="red"
          borderRadius="10px"
          h="15px"
          w="15px"
        >
          <Text textAlign="center" fontSize="xx-small" color="white">
            3
          </Text>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        className="cursor-pointer"
        onClick={logoutHandler}
      >
        <Avatar size="sm">
          <AvatarBadge boxSize="1.25em" bg="green.500" />
        </Avatar>
        <Text>{user.name}</Text>
      </Stack>
    </Stack>
  );
};

export default Header;
