import React, { useRef, useState } from 'react';
import {useGSAP} from '@gsap/react';
import  gsap  from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmedRide from '../components/ConfirmedRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';

const Home = () => {
   const [pickup,setpickup]=useState('');
    const [destination,setdestination]=useState('');
    const [panelOpen, setPanelOpen] = useState(false);
    const panelref = useRef(null);
    const vehiclePanelRef = useRef(null);
     const vehicleFoundRef = useRef(null);
    const ConfirmedRidePanelRef = useRef(null);
    const panelCloseRef=useRef(null);
    const [vehiclePanel,setVehiclePanel]=useState(false);
    const [confirmedRidePanel,setConfirmedRidePanel]=useState(false);
    const [VehicleFound,setVehicleFound]=useState(false);
     const waitingForDriverRef = useRef(null);
      const [waitingForDriver,setWaitingForDriver]=useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  useGSAP(function() {
    if(panelOpen){
      gsap.to(panelref.current,{
        height:'70%',
        opacity:1,
        padding:24
      })
      gsap.to(panelCloseRef.current,{
        opacity:1
      })
    }else{
      gsap.to(panelref.current,{
        height:'0%',
        opacity:0,
        padding:0
      })
      gsap.to(panelCloseRef.current,{
        opacity:0
      })
    }
  },[panelOpen]);

  useGSAP(function(){
    if(vehiclePanel){
    gsap.to(vehiclePanelRef.current,{
transform:'translateY(0%)',
    })}else{
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(100%)',
      })
    }
  },[vehiclePanel])

  useGSAP(function(){
    if(confirmedRidePanel){
    gsap.to(ConfirmedRidePanelRef.current,{
transform:'translateY(0%)',
    })}else{
      gsap.to(ConfirmedRidePanelRef.current,{
        transform:'translateY(100%)',
      })
    }
  },[confirmedRidePanel])
  
  useGSAP(function(){
    if(VehicleFound){
    gsap.to(vehicleFoundRef.current,{
transform:'translateY(0%)',
    })}else{
      gsap.to(vehicleFoundRef.current,{
        transform:'translateY(100%)',
      })
    }
  },[VehicleFound])
  
    useGSAP(function(){
    if(waitingForDriver){
    gsap.to(waitingForDriverRef.current,{
transform:'translateY(0%)',
    })}else{
      gsap.to(waitingForDriverRef.current,{
        transform:'translateY(100%)',
      })
    }
  },[waitingForDriver])
  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="https://www.edigitalagency.com.au/wp-content/uploads/Uber-logo-black-png-900x313.png" alt="Check Connection" />
     <div className='h-screen w-screen'>
      <img className="h-full w-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
     </div>
     <div className='flex flex-col justify-end absolute h-screen top-0 '>
      <div className='h-[30%] p-6 bg-white relative'>
      <h4  className='text-2xl font-semibold'>Find a Trip</h4>
      <h5 className='absolute opacity-0 top-2 right-3 text-xl' ref={panelCloseRef} onClick={()=>setPanelOpen(false)} ><i className="ri-arrow-down-wide-line"></i></h5>
        <form onSubmit={(e)=>{
          submitHandler(e);
        }}>
          <div className="line absolute h-20 w-1 bg-gray-600 top-[45%] left-10 rounded-full "></div>

        <input type="text" className='bg-[#eeeeee] mt-5 rounded-lg px-12 py-2 w-full text-lg ' onClick={()=>setPanelOpen(true)} placeholder='Add a pick-up location' value = {pickup} onChange={(e) => setpickup(e.target.value)} />

        <input type="text" className='bg-[#eeeeee] mt-3 rounded-lg px-12 py-2 w-full text-lg  ' onClick={()=>setPanelOpen(true)} placeholder='Enter your destination' value = {destination} onChange={(e) => setdestination(e.target.value)}/> 
      </form></div>

      <div className='h-[0%] bg-gray-100 opacity-0' ref={panelref} > <LocationSearchPanel setPanelOpen={setPanelOpen}  setVehiclePanel={setVehiclePanel}/></div>
     </div>
     <div ref={vehiclePanelRef} className='fixed z-10 bottom-0 px-3 py-10 bg-white w-full pt-12'>
         <VehiclePanel setConfirmedRidePanel={setConfirmedRidePanel} setVehiclePanel={setVehiclePanel}/>
     </div>
     <div ref={ConfirmedRidePanelRef} className='fixed z-10 bottom-0 px-3 py-6 pt-8 bg-white w-full '>
        <ConfirmedRide setVehiclePanel={setVehiclePanel} setConfirmedRidePanel={setConfirmedRidePanel} setVehicleFound={setVehicleFound} />
     </div>
     <div ref={vehicleFoundRef} className='fixed z-10 bottom-0 px-3 py-6 pt-8 bg-white w-full '>
         <LookingForDriver setVehicleFound={setVehicleFound} />
     </div>
     <div ref={waitingForDriverRef} className='fixed z-10 bottom-0 px-3 py-6 pt-8 bg-white w-full '>
         <WaitingForDriver setWaitingForDriver={setWaitingForDriver} />
     </div>
        </div>
  )
}
export default Home;