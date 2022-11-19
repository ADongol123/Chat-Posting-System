import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from "react-router-dom"
import { selectUserEmail, selectUserloggedIn } from '../features/User/userSlice'
import HomeChat from "../Pages/HomeChat"
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import routepath from "../routepath"
const FileRoutes = () => {
    const userEmail = useSelector(selectUserEmail)
    const userLoggedIn = useSelector(selectUserloggedIn)
    console.log(userLoggedIn)
    console.log(userEmail)
    return (
        <Routes>
            <Route path={routepath.home} element={<HomeChat />} />
            <Route path={routepath.login} element={<Login />} />
            <Route path={routepath.register} element={<Register />} />
        </Routes>
    )
}

export default FileRoutes
