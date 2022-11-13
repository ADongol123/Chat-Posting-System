import React from 'react'
import { useState } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from '@chakra-ui/react'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'
const ChatCustomization = () => {
  const [customizeChat, setCustomizeChat] = useState(false);
  const [media, setMedia] = useState(false);
  const [privacy, setPrivacy] = useState(false);


  return (
    <div>
      <div className='flex justify-between items-center hover:bg-gray-200 p-3 rounded cursor-pointer' onClick={() => setCustomizeChat(!customizeChat)} >
        <Text className='font-medium'>Customize chat</Text>
        {customizeChat ? <MdKeyboardArrowUp className='h-6 w-6' /> : <MdKeyboardArrowDown className='h-6 w-6' />}
      </div>
      <div className='flex justify-between items-center hover:bg-gray-200 p-3 rounded cursor-pointer' onClick={() => setMedia(!media)} >
        <Text className='font-medium'>Media,files and links</Text>
        {media ? <MdKeyboardArrowUp className='h-6 w-6' /> : <MdKeyboardArrowDown className='h-6 w-6' />}
      </div>
      <div className='flex justify-between items-center hover:bg-gray-200 p-3 rounded cursor-pointer' onClick={() => setPrivacy(!privacy)} >
        <Text className='font-medium'>Privacy and support</Text>
        {privacy ? <MdKeyboardArrowUp className='h-6 w-6' /> : <MdKeyboardArrowDown className='h-6 w-6' />}
      </div>
    </div>
  )
}

export default ChatCustomization