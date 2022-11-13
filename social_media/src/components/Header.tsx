import React from 'react'
import { Avatar, IconButton, Input, InputGroup, InputLeftElement, Stack, Text } from '@chakra-ui/react';
import { AiOutlineSearch, AiOutlineBell } from "react-icons/ai"
const Header = () => {
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
            <Stack direction="row" alignItems="center">
                <Avatar size='sm' name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                <Text>Sam</Text>
            </Stack>
        </Stack >
    )
}

export default Header
