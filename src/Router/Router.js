import React from "react";
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Main from '../Main/Main'
import Header from "../Header/Header";
import Footer from "../Footer/Footer"
import Profile from "../Profile/profile";
const Router = () => {

    return(
        <div>
          <BrowserRouter>
          <Header/>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/profile' element={<Profile/>}/>
            </Routes>
          <Footer/>
          </BrowserRouter>
          
        </div>
    )
}

export default Router
