import React from 'react'
import { Stack, Text } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import PersonalInfo from '../components/PersonalInfo';
import Header from '../components/Header';
import ChatRoom from '../components/ChatRoom';
import { useEffect, useState } from "react"
import { auth } from '../firebase';
import Login from './Login';
const HomeChat = () => {
    const [user, setUser] = useState<any>(null)
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            const userData = {
                uid: user?.uid,
                email: user?.email
            }
            if (user) {
                setUser(userData)
            } else {
                setUser(null)
            }
        })
        return unsubscribe
    }, [])
    return (
        <div>
            {user ? <div><Header />
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
                </div></div> : <Login />}

        </div>
    )
}

export default HomeChat