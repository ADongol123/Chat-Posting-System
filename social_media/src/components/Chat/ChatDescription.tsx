import React from 'react'
import { Avatar, Text } from '@chakra-ui/react';
import { BsThreeDots } from "react-icons/bs"


interface Props {
  fetchAgain : boolean
  setFetchAgian : any 
}

const ChatDescription = ({fetchAgain,setFetchAgian}:Props) => {
  return (
    <div className='fixed top-40 overflow-y-scroll h-4/5 p-2' style={{ width: "60%" }}>
      <div className="flex items-center mb-4">
        <Avatar
          size='md'
          name='Prosper Otemuyiwa'
          src='https://bit.ly/prosper-baba'
        />
        <div className='ml-3 bg-blue-500 h-auto text-white w-auto rounded p-4'>
          <div className='flex items-center justify-between space-x-20'>
            <div className='flex items-center space-x-5'>
              <Text className='font-medium'>User Name</Text>
              <Text className='text-xs'>20mins ago</Text>
            </div>
            <BsThreeDots />
          </div>
          <Text className='text-sm'>Hello this is a message</Text>
        </div>
      </div>
      <div className="flex items-center mb-4 justify-end">
        <Avatar
          size='md'
          name='Prosper Otemuyiwa'
          src='https://bit.ly/prosper-baba'
        />
        <div className='ml-3 bg-gray-700 h-auto text-white w-auto rounded p-4'>
          <div className='flex items-center justify-between space-x-20'>
            <div className='flex items-center space-x-5'>
              <Text className='font-medium'>User Name</Text>
              <Text className='text-xs'>20mins ago</Text>
            </div>
            <BsThreeDots />
          </div>
          <Text className='text-sm'>Hello this is a message</Text>
        </div>
      </div>
      <div className="flex items-center mb-4 justify-end">
        <Avatar
          size='md'
          name='Prosper Otemuyiwa'
          src='https://bit.ly/prosper-baba'
        />
        <div className='ml-3 bg-gray-700 h-auto text-white w-auto rounded p-4'>
          <div className='flex items-center justify-between space-x-20'>
            <div className='flex items-center space-x-5'>
              <Text className='font-medium'>User Name</Text>
              <Text className='text-xs'>20mins ago</Text>
            </div>
            <BsThreeDots />
          </div>
          <Text className='text-sm'>Hello this is a message</Text>
        </div>
      </div>
      <div className="flex items-center mb-4 justify-end">
        <Avatar
          size='md'
          name='Prosper Otemuyiwa'
          src='https://bit.ly/prosper-baba'
        />
        <div className='ml-3 bg-gray-700 h-auto text-white w-auto rounded p-4'>
          <div className='flex items-center justify-between space-x-20'>
            <div className='flex items-center space-x-5'>
              <Text className='font-medium'>User Name</Text>
              <Text className='text-xs'>20mins ago</Text>
            </div>
            <BsThreeDots />
          </div>
          <Text className='text-sm'>Hello this is a message</Text>
        </div>
      </div>
      <div className="flex items-center mb-4 justify-end">
        <Avatar
          size='md'
          name='Prosper Otemuyiwa'
          src='https://bit.ly/prosper-baba'
        />
        <div className='ml-3 bg-gray-700 h-auto text-white w-auto rounded p-4'>
          <div className='flex items-center justify-between space-x-20'>
            <div className='flex items-center space-x-5'>
              <Text className='font-medium'>User Name</Text>
              <Text className='text-xs'>20mins ago</Text>
            </div>
            <BsThreeDots />
          </div>
          <Text className='text-sm'>Hello this is a message</Text>
        </div>
      </div>
    </div>
  )
}

export default ChatDescription