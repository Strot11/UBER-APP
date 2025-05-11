import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import UserContext from './Context/UserContext.jsx'
import './index.css'
import App from './App.jsx'
import CaptainContext from './Context/CaptainContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CaptainContext>
   <UserContext>
   <BrowserRouter>
    <App />
    </BrowserRouter>
   </UserContext>
   </CaptainContext>
  </StrictMode>,
)
