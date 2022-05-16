import React from 'react'
import './App.css';
import Header from "./Header/Header"
import Footer from './Footer/Footer'
import Main from "./Main/Main"
import MainRouter from './Router/Router'

function App() {

  return (
    <div className="App">
      <Header/>
      <MainRouter/>
      <Footer/>
    </div>
  );
}

export default App;
