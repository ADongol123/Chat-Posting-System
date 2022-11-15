import React from 'react'
import { Route, Routes } from "react-router-dom"
import HomeChat from "../Pages/HomeChat"
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import routepath from "../routepath"
const FileRoutes = () => {
    return (
        <Routes>
            <Route path={routepath.home} element={<HomeChat />} />
            <Route path={routepath.login} element={<Login />} />
            <Route path={routepath.register} element={<Register />} />
        </Routes>
    )
}

export default FileRoutes
