import React, { useRef, useState } from 'react';
import 'remixicon/fonts/remixicon.css'

const VehiclePanel = (props) =>{
  return (
    <div><h5 className="p-1 text-center absolute top-0 w-[93%] " onClick={()=>props.setVehiclePanel(false)}><i className=" text-3xl text-gray-100 ri-arrow-down-wide-line"></i></h5> 
    <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
    <div onClick={()=>props.setConfirmedRidePanel(true)} className="flex items-center p-3 w-full justify-between border-2 border-gray-50 active:border-black rounded-2xl mb-5"> 
      <img className="h-12" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7Kt54z31PkbdlqmqnyWnaCjvcLYRG-T_8Q&s" alt="UBER-CAR" />
      <div className=' w-1/2'>
        <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-line">4</i></span></h4>
        <h5 className='font-medium text-sm'>2 minutes away</h5>
        <p className='font-normal text-xs'>Affordable, compact rides</p>
      </div>
      <h2 className='text-lg font-semibold'>₹193.20</h2>
    </div>
    <div  onClick={()=>props.setConfirmedRidePanel(true)} className="flex items-center p-3 w-full justify-between  border-2 border-gray-50 active:border-black rounded-2xl mb-5"> 
      <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png" alt="UBER-Bike" />
      <div className=' w-1/2'>
        <h4 className='font-medium text-base'>UberBike <span><i className="ri-user-line">1</i></span></h4>
        <h5 className='font-medium text-sm'>8 minutes away</h5>
        <p className='font-normal text-xs'>Affordable, MotorCycle rides</p>
      </div>
      <h2 className='text-lg font-semibold'>₹48.70</h2>
    </div>
    <div onClick={()=>props.setConfirmedRidePanel(true)} className="flex items-center p-3 w-full justify-between border-2 border-gray-50 active:border-black rounded-2xl mb-5"> 
      <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="UBER-Auto" />
      <div className=' w-1/2'>
        <h4 className='font-medium text-base'>UberAuto <span><i className="ri-user-line">3</i></span></h4>
        <h5 className='font-medium text-sm'>12 minutes away</h5>
        <p className='font-normal text-xs'>Affordable, Auto rides</p>
      </div>
      <h2 className='text-lg font-semibold'>₹110.32</h2>
    </div></div>
  )
}
export default VehiclePanel;