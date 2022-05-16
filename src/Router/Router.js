import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route,} from "react-router-dom";
  import Main from '../Main/Main'

const Router = () => {

    return(
        <div>
          <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main/>}/>
            </Routes>
          </BrowserRouter>
          
        </div>
    )
}

export default Router
