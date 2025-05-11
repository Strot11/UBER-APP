import React from 'react';
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import {UserDataContext} from '../Context/UserContext';



const UserSignUp = () =>{
   const [email,setemail] = useState('');
        const [password,setpassword] = useState('');
        const [FirstName,setFirstName] = useState('');
        const [LastName,setLastName] = useState('');
        const [userData,setuserData] = useState({});

        const navigate = useNavigate();

        const {user,setUser} = React.useContext(UserDataContext);

        const submitHandler =async(e)=>{
           e.preventDefault();
           const newUser = {
            fullname:{
              firstname:FirstName,
            lastname:LastName
            },
            email:email,
            password:password
           }
      console.log(`${import.meta.env.VITE_BASE_URL}/users/register`);

const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser);
if(response.status === 201){
  const data = response.data;
  console.log(data);
  setUser(data.user); // onplace of user lets depend on token because if after logging in user reloads  then you will simply gets logged out as data get lost from context api. Thats why we rely on token more.
  localStorage.setItem('token',data.token); 
  navigate('/home')
}
           setemail('');
           setpassword('');
           setFirstName('');
           setLastName('');
        }
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
    <div >
      <img className='w-16 mb-4 ' src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />
      
    <form onSubmit={e => submitHandler(e)}>
    <h3 className='text-lg mb-2 font-medium mt-2'>USERNAME</h3>
      <div className='flex gap-2 mb-5'>
      <input className=' bg-[#eeeeee] rounded px-4 py-2 border-2 w-1/2 text-lg placeholder:text-base' type="text" required placeholder='FirstName' value={FirstName} onChange={(e)=>setFirstName(e.target.value)} />
      <input className=' bg-[#eeeeee] rounded px-4 py-2 border-2 w-1/2 text-lg placeholder:text-base' type="text" required placeholder='LastName' value={LastName} onChange={(e)=>setLastName(e.target.value)} />
      </div>
      <h3 className='text-lg mb-2 font-medium'>What's Your Email</h3>
      <input className='mb-7 bg-[#eeeeee] rounded px-4 py-2 border-2 w-full text-lg placeholder:text-base' type="email" required placeholder='email@example.com' value={email} onChange={(e)=>setemail(e.target.value)}/>

      <h3 className='text-lg mb-2 font-medium'>Enter Password</h3>
      <input className='mb-7 bg-[#eeeeee] rounded px-4 py-2 border-2 w-full text-lg placeholder:text-base' type="password" required placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)} />
      <button className='mb-7 bg-[#111] text-white font-semibold rounded px-4 py-2 w-full text-lg'>Create Account</button>
      </form>
     <p className='text-center mb-1'>Already Have Account? <Link to='/login' className="text-blue-600">Login here</Link></p>
  
    </div>
    <div>
    <p className="text-xs mb-1 text-center"> <span className='underline'>Terms And Condition</span> & <span className='underline'>Google Policy</span></p>
     <p className="text-xs mb-5">
      By proceeding ,you consent to get Emails to get New Information, Whatsapp or SMS messages may be further required  including by Manual means, from Uber and its affiliates to an email provided. 
     </p>
    </div>
     </div>
  )
  
}
export default UserSignUp;