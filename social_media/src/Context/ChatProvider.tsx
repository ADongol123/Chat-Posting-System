import { createContext, useContext, useEffect, useState } from "react";

const ChatContext = createContext({});

const ChatProvider = ({ children }: any) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const str = window.localStorage.getItem("userInfo");
    return str ? JSON.parse(str) : undefined;
  }, [])
  return <ChatContext.Provider value={{ user, setUser }}>{children}</ChatContext.Provider>;
};

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;
