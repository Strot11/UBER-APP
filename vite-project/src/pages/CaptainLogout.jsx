import {useNavigate } from 'react-router-dom';
import axios from 'axios';

  export const CaptainLogout = () =>{
    const navigate = useNavigate();
     const token = localStorage.getItem('token')
     axios.get(`${import.meta.env.VITE_API_URL}/captain/logout`,{
      headers:{
        Authorization:`Bearer ${token}`
      }
     }).then((response)=>{
      if(response.status == 200){
        localStorage.removeItem('token')
        navigate('/captain-login')
      }
     })  
     return <div>CaptainLogout</div>
  }
  export default CaptainLogout;
