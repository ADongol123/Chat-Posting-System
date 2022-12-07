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
} from "./../features/User/userSlice";
import { useNavigate } from "react-router-dom";

interface Props {
  name: string;
  email: string;
  photo: string;
  status: boolean;
}

const Header = ({ name, email, photo, status }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [searchResult, setSeatchResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);
  const btnRef = React.useRef();
  const toast = useToast()

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };


  const handleSearch = () =>{
    if(!search){
        toast({
            title: "Please Enter something in search",
            status: "warning",
            duration: 5000,
            isClosable: true,
            position: "top-left"
          })
          return;
    }
  }
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
            <Stack direction="row" spacing="0">
              <Input
                placeholder="Search by name or email"
                mr={2}
                flex={1}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button
              onClick={handleSearch}
              >Search</Button>
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
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
        <Text>{name}</Text>
      </Stack>
    </Stack>
  );
};

export default Header;
