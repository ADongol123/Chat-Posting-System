import React from 'react'
import { Stack, Text } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import PersonalInfo from '../components/PersonalInfo';
import Header from '../components/Header';
import ChatRoom from '../components/ChatRoom';
import { useEffect, useState } from "react"
import { auth } from '../firebase';
import Login from './Login';
import { useDispatch } from 'react-redux';
import { setUserLogin } from '../features/User/userSlice';


const HomeChat = () => {
    const [user, setUser] = useState<any>({})
    console.log(user, "data")
    const dispatch = useDispatch();
    useEffect(() => {
        const userInfo = window.localStorage.getItem("userInfo");
        if (userInfo) { 
            setUser(JSON.parse(userInfo))
            dispatch(
                setUserLogin({
                    name: user.name,
                    email: user.email,
                    photo: user.pic,
                    loggedIn: true
                })
            )

        };
    }, [localStorage])
    return (
        <div>
            <div><Header />
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
                </div></div>

        </div>
    )
}

export default HomeChat