import { Stack, Text } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import PersonalInfo from '../components/PersonalInfo';
import Header from '../components/Header';
import ChatRoom from '../components/ChatRoom';
import { useEffect, useState } from "react"
import { useDispatch, useSelector} from 'react-redux';
import { selectUserEmail, selectUserloggedIn, selectUserName, selectUserPhoto, setUserLogin } from '../features/User/userSlice';
import { useNavigate } from 'react-router-dom';


const HomeChat = () => {
    const navigate = useNavigate();
    const userName = useSelector(selectUserName);
    const userEmail = useSelector(selectUserEmail);
    const userPhoto = useSelector(selectUserPhoto);
    const userStatus = useSelector(selectUserloggedIn);
    const dispatch = useDispatch();
    useEffect(() => {
        const userInfo = window.localStorage.getItem("userInfo");
        const parsedUser = userInfo && JSON.parse(userInfo)
        if (Object.keys(parsedUser).length > 0) { 
        console.log(parsedUser,"data")
            dispatch(
                setUserLogin({
                    name: parsedUser.name,
                    email: parsedUser.email,
                    photo: parsedUser.pic,
                    loggedIn: true
                })
            )

        }
        else{
            navigate("/")
        };
    }, [])
    return (
        <>
       <div>
                <Header name={userName} email={userEmail} photo={userPhoto} status={userStatus} />
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
            
            </>
    )
}

export default HomeChat