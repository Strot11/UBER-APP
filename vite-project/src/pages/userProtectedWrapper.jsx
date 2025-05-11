import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// This is a component which is created so that only the user who had logged in should be viewed this page not publically been accessed 
const UserProtectWrapper=({children})=>{
  const token = localStorage.getItem('token')
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {   // ek baar samaj lena isse 
        navigate('/login')
    }
}, [ token ])

return (
    <>
        {children}
    </>
)
}

export default UserProtectWrapper