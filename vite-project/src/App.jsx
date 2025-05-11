import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Start from './pages/start';
import UserLogin from './pages/UserLogin';
import UserSignUp from './pages/UserSignup';
import CaptainLogin from './pages/CaptainLogin';
import CaptainSignUp from './pages/CaptainSignup';
import Home from './pages/home';
import UserProtectWrapper from './pages/userProtectedWrapper';
import { UserLogout } from './pages/UserLogout';
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/captainProtectWrapper';
import CaptainLogout from './pages/CaptainLogout';

const App = () =>{
  return (
    <div>
   <Routes>
    <Route path='/' element={<Start/>}/>
    <Route path='/login' element={<UserLogin/>}/>
    <Route path='/signup' element={<UserSignUp/>}/>
    <Route path='/captain-login' element={<CaptainLogin/>}/>
    <Route path='/captain-signup' element={<CaptainSignUp/>}/>
    <Route path='/home' element={<UserProtectWrapper><Home/></UserProtectWrapper>}/>
    <Route path='/users/logout' element={<UserLogout/>}></Route>
    <Route path='/captain-home' element={<CaptainProtectWrapper><CaptainHome/></CaptainProtectWrapper>}></Route>
    <Route path='/captain/logout' element={<CaptainLogout/>}></Route>
   </Routes>
   </div>
  )
}
export default App;