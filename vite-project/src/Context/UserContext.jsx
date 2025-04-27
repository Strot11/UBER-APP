import React,{createContext} from 'react';

export const UserDataContext = createContext();
const [user,setUser] = useState({
  email:'',
  fullName:{
    firstname:'',
    lastname:''
  }
})

const UserContext = ({children}) =>{
  const user = 'Strot';
  return (
    <UserDataContext.Provider value={[user,setUser]}>
      {children}
    </UserDataContext.Provider>
   
  )
}
export default UserContext;