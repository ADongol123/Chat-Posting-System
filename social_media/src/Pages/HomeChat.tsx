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
  const { user }: any = ChatState();

  // useEffect(() => {
  //   const userInfo = window.localStorage.getItem("userInfo");
  //   const parsedUser = userInfo && JSON.parse(userInfo);
  //   if (parsedUser && Object.keys(parsedUser).length > 0) {
  //     console.log(parsedUser, "data");
  //     dispatch(
  //       setUserLogin({
  //         name: parsedUser.name,
  //         email: parsedUser.email,
  //         photo: parsedUser.pic,
  //         loggedIn: true,
  //       })
  //     );
  //   } else {
  //     navigate("/");
  //   }
  // }, []);
  return (
    <>
    {user ?       <div>
        <Header />
        <div className=" flex h-screen fixed w-screen">
          <div style={{ flex: "0.2" }}>
            <Sidebar />
          </div>
          <div style={{ flex: "0.6" }}>
            <ChatRoom />
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
