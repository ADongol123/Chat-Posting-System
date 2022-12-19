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

const HomeChat = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user }: any = ChatState();
  return (
    <>
      {!user ? (
        navigate("/")
      ) : (
        <div style={{width : "100%"}}>
          <Header />
          <Box
            display="flex"
            justifyContent="space-between"
            position="fixed"
            w="100%"
            h="91.5vh"
            p="10px"
          >
            <Sidebar fetchAgain={fetchAgain} />
            <ChatRoom fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
          </Box>
        </div>
      )}
    </>
  );
};

export default HomeChat;
