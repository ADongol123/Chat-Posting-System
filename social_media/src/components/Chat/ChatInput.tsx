import { FormControl, Input, Toast, useToast } from "@chakra-ui/react";
import axios from "axios";
import { AiOutlineSmile, AiOutlineSend } from "react-icons/ai";
import { TiAttachment } from "react-icons/ti";
import { ChatState } from "../../Context/ChatProvider";

interface Props {
  messages?: any;
  setMessages?: any;
  newMessage?: any;
  setNewMessage?: any;
}

const ChatInput = ({
  messages,
  setMessages,
  newMessage,
  setNewMessage,
}: Props) => {
  const { user, selectedChat, setSelectedChat }: any = ChatState();
  const toast = useToast();

  const sendMessage = async (e: any) => {
    if (e.key === "Enter" && newMessage) {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        };
        setNewMessage(" ");
        const { data } = await axios.post(
          "api/message",
          {
            content: newMessage,
            chatId: selectedChat._id,
          },
          config
        );
        setMessages([...messages, data]);
      } catch (error) {
        toast({
          title: "Error Occured",
          description: "Failed to send the messages",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
      }
    }
  };
  const typingHandler = (e: any) => {
    setNewMessage(e.target.value);
    e.preventDefault();
  };
  return (
    <div
      className=" flex items-center border-t-2 border-gray-200 fixed bottom-0 p-2 h-auto space-x-3 bg-white z-1000 "
      style={{ width: "60%" }}
    >
      <AiOutlineSmile className="h-5 w-5" />
      <FormControl onKeyDown={sendMessage} isRequired>
        <Input
          variant="filled"
          bg="blue-400"
          onChange={typingHandler}
          value={newMessage}
        />
      </FormControl>

      <TiAttachment className="h-5 w-5" />
      <div className="bg-blue-500 rounded-lg h-8 w-8 flex justify-center items-center hover:bg-blue-400">
        <AiOutlineSend color="white" className="h-5 w-5" />
      </div>
    </div>
  );
};

export default ChatInput;
