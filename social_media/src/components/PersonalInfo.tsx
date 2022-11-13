import React, { useState } from 'react'
import { Stack, Text, Avatar } from '@chakra-ui/react';
import { FaUserCircle } from "react-icons/fa"
import { MdNotifications } from 'react-icons/md'
import { AiOutlineSearch } from 'react-icons/ai'
import ChatCustomization from './Chat/ChatCustomization';
const PersonalInfo = () => {
  return (
    <div className='flex flex-col space-y-8 fixed right-0' style={{ width: "20%" }}>
      <div className='flex flex-col items-center space-y-8'>
        <Avatar marginTop="5" size='2xl' name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
        <div className='flex space-x-8'>
          <div className='flex flex-col items-center'>
            <div className='bg-gray-200 p-2 h-10 w-10 rounded-full hover:bg-gray-300'>
              <FaUserCircle className='h-6 w-6 text-black' />
            </div>
            <Text>Profile</Text>
          </div>
          <div className='flex flex-col items-center'>
            <div className='bg-gray-200 p-2 h-10 w-10  rounded-full hover:bg-gray-300'>
              <MdNotifications className='h-6 w-6 text-black' />
            </div>
            <Text>Mute</Text>
          </div>
          <div className='flex flex-col items-center'>
            <div className='bg-gray-200 p-2 h-10 w-10  rounded-full hover:bg-gray-300'>
              <AiOutlineSearch className='h-6 w-6 text-black' />
            </div>
            <Text>Search</Text>
          </div>
        </div>
      </div>
      <div className='p-1'>
        <ChatCustomization />
      </div>
    </div >
  )
}

export default PersonalInfo
