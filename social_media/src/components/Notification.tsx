import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineBell } from "react-icons/ai";
import { getSender } from "../config/ChatLogics";
import { ChatState } from "../Context/ChatProvider";
const {
  setSelectedChat,
  user,
  notification,
  setNotification,
  chats,
  setChats,
}: any = ChatState();
const Notification = () => {
  return (
    <div>
      <Stack>
        <Menu>
          <MenuButton as={Button} background="transparent">
            <AiOutlineBell height={10} width={10} />
          </MenuButton>
          <MenuList pl={2}>
            {!notification.length && "no new messages"}
            {/* // TODO: error is in this line  */}
            {notification.map((details) => (
              <MenuItem
                key={details._id}
                onClick={() => {
                  setSelectedChat(details.chat);
                  setNotification(
                    notification.filter((data) => data !== details)
                  );
                }}
              >
                {details?.chat?.isGroupChat
                  ? `New Message in ${details?.chat?.chatName}`
                  : `New Message from ${getSender(user, details?.chat?.users)}`}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        <Stack
          position="absolute"
          justifyContent="center"
          bg="red"
          borderRadius="10px"
          h="12px"
          w="12px"
        >
          <Text textAlign="center" fontSize="10px" color="white">
            3
          </Text>
        </Stack>
      </Stack>
    </div>
  );
};

export default Notification;
