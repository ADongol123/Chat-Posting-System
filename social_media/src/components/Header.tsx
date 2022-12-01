import React from 'react'
import { Avatar, IconButton, Input, InputGroup, InputLeftElement, Stack, Text, AvatarBadge } from '@chakra-ui/react';
import { AiOutlineSearch, AiOutlineBell } from "react-icons/ai"
import { auth } from '../firebase';
import { useSelector } from 'react-redux';
import { selectUserPhoto, selectUserName, selectUserloggedIn } from './../features/User/userSlice';
const Header = () => {
    const signoutHandler = () => {
        auth.signOut()
    }
    const userPhoto = useSelector(selectUserPhoto)
    const userName = useSelector(selectUserName)
    const userLog = useSelector(selectUserloggedIn)
    return (
        <Stack direction="row" p="2" borderBottom="1px solid lightgray" className='sticky top-0 bg-white z-1000'>
            <Stack p="2" flex="1">
                <InputGroup>
                    <InputLeftElement
                        pointerEvents='none'
                        children={<AiOutlineSearch color='gray.300' />}
                    />
                    <Input type='tel' placeholder='Search Here....' />
                </InputGroup>
            </Stack>
            <Stack>
                <IconButton
                    colorScheme='blue'
                    aria-label='Call Segun'
                    variant='outlined'
                    size='lg'
                    icon={<AiOutlineBell />}
                />
                <Stack position="absolute" justifyContent="center" bg="red" borderRadius="10px" h="15px" w="15px">
                    <Text textAlign="center" fontSize="xx-small" color="white">3</Text>
                </Stack>
            </Stack>
            <Stack direction="row" alignItems="center" className='cursor-pointer' onClick={signoutHandler}>
                <Avatar size="sm" src={userPhoto}>
                    <AvatarBadge boxSize='1.25em' bg='green.500' />
                </Avatar>
                <Text>{userName}</Text>
            </Stack>
        </Stack >
    )
}

export default Header
