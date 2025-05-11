import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserDataContext } from '../Context/UserContext';

const Start = () =>{
  return (
    <div className="bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1593950315186-76a92975b60c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWJlcnxlbnwwfHwwfHx8MA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-ful">
      <img className='w-20 ml-8' src="https://www.edigitalagency.com.au/wp-content/uploads/Uber-logo-white-png-900x313.png" alt="" />
      <div className='bg-white py-4 px-4 pb-7'>
        <h2 className="text-3xl font-bold text-center">Get Started With Uber</h2>
        <Link to='/login' className='flex justify-center items-center w-full bg-black text-white py-3 rounded mt-5 font-bold'>Continue</Link>
      </div>
     
    </div>
  )
}
export default Start;