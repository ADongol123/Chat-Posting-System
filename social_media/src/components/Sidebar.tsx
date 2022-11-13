import { Avatar, AvatarBadge, Text } from '@chakra-ui/react'
import React from 'react'

const Sidebar = () => {
    return (
        <div className='flex flex-col  bg-gray-200 fixed left-0' style={{ width: "20%" }} >
            <div className="flex flex-col space-x-2 content-center">
                <Text className='font-medium text-base'>Favourites</Text>
                <div className="flex space-x-3 my-2 h-10 overflow-hidden">
                    <Avatar size="sm">
                        <AvatarBadge boxSize='1.25em' bg='green.500' />
                    </Avatar>
                    <Avatar size="sm">
                        <AvatarBadge boxSize='1.25em' bg='orange.500' />
                    </Avatar>
                    <Avatar size="sm">
                        <AvatarBadge boxSize='1.25em' bg='green.500' />
                    </Avatar>
                    <Avatar size="sm">
                        <AvatarBadge boxSize='1.25em' bg='orange.500' />
                    </Avatar>
                    <Avatar size="sm">
                        <AvatarBadge boxSize='1.25em' bg='green.500' />
                    </Avatar>
                    <Avatar size="sm">
                        <AvatarBadge boxSize='1.25em' bg='orange.500' />
                    </Avatar>

                </div>
            </div>
            <div className='flex flex-col h-screen'>
                <Text className='font-medium text-base space-y-2'>My Chat List</Text>
                <div className='p-3 overflow-y-scroll h-full'>
                    <div className="flex justify-between p-2 mb-2 bg-white rounded">
                        <div className="flex justify-center items-center space-x-4">
                            <Avatar
                                size='md'
                                name='Prosper Otemuyiwa'
                                src='https://bit.ly/prosper-baba'
                            />
                            <div className="flex flex-col">
                                <Text className='font-medium'>Bill Gates </Text>
                                <Text className='font-medium text-gray-600'>Hello its me bill gatess</Text>
                            </div>
                        </div>
                        <Text className='font-medium text-sm text-gray-500'>30Min</Text>
                    </div>
                    <div className="flex justify-between p-2 mb-2 bg-white rounded">
                        <div className="flex justify-center items-center space-x-4">
                            <Avatar
                                size='md'
                                name='Prosper Otemuyiwa'
                                src='https://bit.ly/prosper-baba'
                            />
                            <div className="flex flex-col">
                                <Text className='font-medium'>Bill Gates </Text>
                                <Text className='font-medium text-gray-600'>Hello its me bill gatess</Text>
                            </div>
                        </div>
                        <Text className='font-medium text-sm text-gray-500'>30Min</Text>
                    </div>
                    <div className="flex justify-between p-2 mb-2 bg-white rounded">
                        <div className="flex justify-center items-center space-x-4">
                            <Avatar
                                size='md'
                                name='Prosper Otemuyiwa'
                                src='https://bit.ly/prosper-baba'
                            />
                            <div className="flex flex-col">
                                <Text className='font-medium'>Bill Gates </Text>
                                <Text className='font-medium text-gray-600'>Hello its me bill gatess</Text>
                            </div>
                        </div>
                        <Text className='font-medium text-sm text-gray-500'>30Min</Text>
                    </div>
                    <div className="flex justify-between p-2 mb-2 bg-white rounded">
                        <div className="flex justify-center items-center space-x-4">
                            <Avatar
                                size='md'
                                name='Prosper Otemuyiwa'
                                src='https://bit.ly/prosper-baba'
                            />
                            <div className="flex flex-col">
                                <Text className='font-medium'>Bill Gates </Text>
                                <Text className='font-medium text-gray-600'>Hello its me bill gatess</Text>
                            </div>
                        </div>
                        <Text className='font-medium text-sm text-gray-500'>30Min</Text>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar