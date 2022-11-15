import React from 'react'
import { SiLetterboxd } from 'react-icons/si';
import { AiFillEdit } from "react-icons/ai"
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
const EditName = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div>
      <div onClick={onOpen}><div className='flex items-center space-x-4 p-2 cursor-pointer hover:bg-gray-200 rounded'>
        <SiLetterboxd color='#3b82f6' className='h-6 w-6' />
        <Text fontSize="md" fontWeight="medium">Edit Nicknames</Text>
      </div></div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Nicknames
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className='flex justify-between items-center'>
              <div>
                <Text fontSize="medium" fontWeight="medium">Rob Holding</Text>
                <Text>Original Name</Text>
              </div>
              <AiFillEdit className='w-6 h-6' />
            </div>
            <div className='flex justify-between items-center'>
              <div>
                <Text fontSize="medium" fontWeight="medium">Rob Holding</Text>
                <Text>Original Name</Text>
              </div>
              <AiFillEdit className='w-6 h-6' />
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

export default EditName
