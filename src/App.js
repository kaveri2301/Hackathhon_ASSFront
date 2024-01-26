// import './App.css'; 

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'
import {  Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import Createaccount from './Pages/Createaccount';
import PasswordRecovery from './Pages/PasswordRecovery';
import UsersTable from './Pages/UsersTable';
import UpdateForm from './Pages/UpdateForm';
import Home from './Pages/Home';

export default function App() {
  return (
    <>
    {/* <Header/> */}
    
    
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/Createaccount' element={<Createaccount/>}/>
    <Route path='/pass' element={<PasswordRecovery/>}/>
      <Route path='/register' element={<Registration/>}/>
      <Route path='/table' element={<UsersTable/>}/>
      <Route path='/updateform' element={<UpdateForm/>}/>

    </Routes>
    
    
    
    
    
    </>
  )
}






