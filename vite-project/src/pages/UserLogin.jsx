import React, { useState,useContext } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import {UserDataContext} from '../Context/UserContext';

const UserLogin = () =>{
  const [email,setemail] = useState('');
  const [password,setpassword] = useState('');
  const [userData,setUserData] = useState({});

const {user,setUser} = React.useContext(UserDataContext);
const navigate = useNavigate();

  const submitHandler =async(e)=>{
     e.preventDefault();
     const userData = {
      email:email,
      password:password
     }

     const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userData);
     if(response.status === 200){
      console.log('redirecting');
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token',data.token); 
      navigate('/home');
     }
     setemail('');
     setpassword('');
  }
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
   <div >
   <img className='w-16 mb-4 ' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />
   <form onSubmit={e => submitHandler(e)}>
     <h3 className='text-xl mb-2 font-medium'>What's Your Email</h3>
     <input className='mb-7 bg-[#eeeeee] rounded px-4 py-2 border-2 w-full text-lg placeholder:text-base' type="email" required placeholder='email@example.com' value={email} onChange={(e)=>setemail(e.target.value)}/>
     <h3 className='text-xl mb-2 font-medium'>Enter Password</h3>
     <input className='mb-7 bg-[#eeeeee] rounded px-4 py-2 border-2 w-full text-lg placeholder:text-base' type="password" required placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)} />
     <button className='mb-7 bg-[#111] text-white font-semibold rounded px-4 py-2 w-full text-lg'>Login</button>
     </form>
    <p className='text-center mb-1'>New Here? <Link to='/signup' className="text-blue-600">Create new Account</Link></p>
 
   </div>
   <div>
    <Link to="/captain-login" className='flex justify-center items-center mb-7 bg-[#06aa00] text-white font-semibold rounded px-4 py-2 w-full text-lg'>LOGIN AS CAPTAIN</Link>
   </div>
    </div>
  )
}
export default UserLogin;