import {useNavigate } from 'react-router-dom';
import axios from 'axios';


export const UserLogout = () =>{
  const navigate = useNavigate();
   const token = localStorage.getItem('token')
   axios.get(`${import.meta.env.VITE_API_URL}/users/logout`,{
    headers:{
      Authorization:`Bearer ${token}`
    }
   }).then((response)=>{
    if(response.status == 200){
      localStorage.removeItem('token')
      navigate('/login')
    }
   })  
   return <div>UserLogout</div>
}
export default UserLogout;
