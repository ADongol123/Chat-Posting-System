import { Stack, Text } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import PersonalInfo from "../components/PersonalInfo";
import Header from "../components/Header";
import ChatRoom from "../components/ChatRoom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserLogin,
} from "../features/User/userSlice";
import { useNavigate } from "react-router-dom";
import { ChatState } from "../Context/ChatProvider";

const HomeChat = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [fetchAgain,setFetchAgain] = useState(false)
  const { user }: any = ChatState();

  

  
  return (
    <>
    { user ?       <div>
        <Header />
        <div className=" flex h-screen fixed w-screen">
          <div style={{ flex: "0.2" }}>
            <Sidebar  fetchAgain={fetchAgain} />
          </div>
          <div style={{ flex: "0.6" }}>
            <ChatRoom fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}/>
          </div>
          <div style={{ flex: "0.2" }}>
            <PersonalInfo />
          </div>
        </div>
      </div> : navigate("/")}

    </>
  );
};

export default HomeChat;
