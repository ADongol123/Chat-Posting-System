import React, { useState } from 'react'
import { HexColorPicker } from 'react-colorful';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
} from '@chakra-ui/react'
import { AiOutlineBgColors } from 'react-icons/ai';
const ChatTheme = () => {
  const [color, setColor] = useState("#aabbcc");
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>
      <div onClick={onOpen}><div className='flex items-center space-x-4 p-2 cursor-pointer hover:bg-gray-200 rounded'>
        <AiOutlineBgColors color='#3b82f6' className='h-6 w-6' />
        <Text fontSize="md" fontWeight="medium">Change Theme</Text>
      </div></div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Select Your Desired Color
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className='flex space-x-5'>
              <HexColorPicker className='w-4/6' color={color} onChange={setColor} />
              <div>
                <Text fontSize="medium" fontWeight="medium">Selected Color</Text>
                <div className='flex'>
                  <input
                    type="text"
                    className='flex-1 w-2/6 h-8 rounded border border-gary-300 focus:outline-none focus:ring-2
         focus:ring-blue-400 focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed'
                  />
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </div>
  )
}

export default ChatTheme
