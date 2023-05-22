import logo from './logo.svg';
import './App.css';
import Navbare from './components/Navbare';
import Admin from "./components/admin/admin"
import User from './components/user/user'
import Agent from "./components/Agent"
import SearchBare from './components/SearchBare';
import Edit from "./components/admin/edit"
import UserInfo from './components/admin/userinfo';
import { BrowserRouter,Route, Routes ,} from 'react-router-dom';
import NotFount from './components/NotFount';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import  {useState} from "react"
import {ToastContainer} from 'react-toastify'
 import 'react-toastify/dist/ReactToastify.css';
import Bag from './components/admin/admin';
import Carosel from './components/Carosel';
import Register from './components/admin/register';
import Login from './components/auth/login';
import { QRCodeSVG } from 'qrcode.react';
import Stat from './components/admin/stat/stat';
import QrGen from './components/QrGen'

function App() {
  // const  {theme}=useSelector(theme=>theme)
 
  return (
    <div className={`App `}>
      <ToastContainer className="wtoast" />
      <ToastContainer className="dtoast" theme='dark' />

      <BrowserRouter>
      <Navbare/>

      <header className="App-search">
      {/* <SearchBare/> */}
      </header>
      <Routes>
        {/* <Route path="/not-found" component={NotFount}/> */}
        <Route path="users" element={<Agent/>}/>
        <Route path="/" exact element={<Carosel/>}/>
        <Route path="admin" exact element={<Admin/>}/>
        <Route path="register" exact element={<Register/>}/>
        <Route path="stat" exact element={<Stat/>}/>
        <Route path="userinfo" exact element={<UserInfo/>}/>


        <Route path="user" exact element={<User/>}/>
        <Route path="login" exact element={<Login/>}/>
        <Route path="edit" exact element={<Edit/>}/>

        <Route path="qrcode" exact element={<QRCodeSVG/>}/>
        <Route path="qrcode2" exact element={<QrGen/>}/>


         <Route path="*" element={<NotFount/>}/>
        {/* <Route to="/not-found"/> */}

      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
