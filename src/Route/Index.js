import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//Components
import Home from '../Components/Home'
import Informacion from '../Components/Informacion'
import App from '../App'
import NavBar from '../Components/NavBar'

const Routing = () => {
    return (
        <BrowserRouter>
         <NavBar />
            <Routes>
                <Route  path="/" element={<Home />} />
                <Route  path={"improvisacion"} element={<App />} />
                <Route  path={"informacion"} element={<Informacion />} />
            </Routes>

           
        </BrowserRouter>
    )
}

export default Routing
