import React from "react";
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Main from '../Main/Main'
import Profile from "../Profile/profile";
const Router = () => {

    return(
        <div>
          <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/profile' element={<Profile/>}/>
            </Routes>
          </BrowserRouter>
          
        </div>
    )
}

export default Router
