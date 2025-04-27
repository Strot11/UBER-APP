import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const CaptainLogin = () =>{
  const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    const [CaptainData,setCaptainData] = useState({});
    const submitHandler =async(e)=>{
       e.preventDefault();
        setCaptainData({
        email:email,
        password:password
       })
       setemail('');
       setpassword('');
    }
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
    <div >
    <div className='flex justify-between font-strong text-lg'>
      <img className='w-16 mb-4 ' src="https://pngimg.com/d/uber_PNG24.png" alt="" />
      <h1 className="pt-7.5 font-medium">Login For Captain</h1>
      </div>
    <form onSubmit={e => submitHandler(e)}>
      <h3 className='text-xl mb-2 font-medium'>What's Your Email</h3>
      <input className='mb-7 bg-[#eeeeee] rounded px-4 py-2 border-2 w-full text-lg placeholder:text-base' type="email" required placeholder='email@example.com' value={email} onChange={(e)=>setemail(e.target.value)}/>
      <h3 className='text-xl mb-2 font-medium'>Enter Password</h3>
      <input className='mb-7 bg-[#eeeeee] rounded px-4 py-2 border-2 w-full text-lg placeholder:text-base' type="password" required placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)} />
      <button className='mb-7 bg-[#111] text-white font-semibold rounded px-4 py-2 w-full text-lg'>Login</button>
      </form>
     <p className='text-center mb-1'>Join as Captain? <Link to='/captain-signup' className="text-blue-600">Register As Captain</Link></p>
  
    </div>
    <div>
     <Link to="/login" className='flex justify-center items-center mb-7 bg-[#bd7100] text-white font-semibold rounded px-4 py-2 w-full text-lg'>LOGIN AS USER</Link>
    </div>
     </div>  
  )
}
export default CaptainLogin;