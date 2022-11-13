import React from 'react'
import { Route, Routes } from "react-router-dom"
import HomeChat from "../Pages/HomeChat"
import routepath from "../routepath"
const FileRoutes = () => {
    return (
        <Routes>
            <Route path={routepath.home} element={<HomeChat />} />
        </Routes>
    )
}

export default FileRoutes
