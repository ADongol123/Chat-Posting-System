import { Avatar, Text } from '@chakra-ui/react'
import React from 'react'
import { BsThreeDots } from "react-icons/bs"
import { AiOutlineSmile } from "react-icons/ai"
import ChatInput from './Chat/ChatInput'
import ChatDescription from './Chat/ChatDescription'
const ChatRoom = () => {
  return (
    <div className='flex flex-col border-r-2 border-gray-200 h-screen '>
      <div className="flex flex-1 items-center justify-between pt-2 pr-4 pb-2 fixed top-13 border-b-2 border-gray-200" style={{ width: "60%" }}>
        <div className='flex space-x-2 items-center p-2'>
          < Avatar
            size='md'
            name='Prosper Otemuyiwa'
            src='https://bit.ly/prosper-baba'
          />
          <Text className='font-medium '>John Doe</Text>
        </div >
        <div>
          <BsThreeDots className='h-6 w-6 ' />
        </div>
      </div >
      <ChatDescription />
      <ChatInput />
    </div >
  )
}

export default ChatRoom
