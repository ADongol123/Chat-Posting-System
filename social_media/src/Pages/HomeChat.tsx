import React from 'react'
import { Stack, Text } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import PersonalInfo from '../components/PersonalInfo';
import Header from '../components/Header';
import ChatRoom from '../components/ChatRoom';

const HomeChat = () => {
    return (
        <div>
            <Header />
            <div className=' flex h-screen fixed w-screen'>
                <div style={{ flex: '0.2' }}>
                    <Sidebar />
                </div>
                <div style={{ flex: '0.6' }}>
                    <ChatRoom />
                </div>
                <div style={{ flex: '0.2' }}>
                    <PersonalInfo />
                </div>
            </div>
        </div>
    )
}

export default HomeChat