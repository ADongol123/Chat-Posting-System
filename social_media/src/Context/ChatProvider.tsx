import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ChatContext = createContext({});

const ChatProvider = ({ children }: any) => {
  const [user, setUser] = useState();
  console.log(user)
  const [selectedChat,setSelectedChat] = useState();
  const [notification,setNotification] = useState();
  const [chats,setChats] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    const userInfo = window.localStorage.getItem("userInfo");
    const parsedUser = userInfo && JSON.parse(userInfo);
    setUser(parsedUser)

    if(!user){
        navigate("/")
    }
  }, [])
  return <ChatContext.Provider value={{ user, setUser,selectedChat,setSelectedChat,notification, setNotification, chats ,setChats }}>{children}</ChatContext.Provider>;
};

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;
