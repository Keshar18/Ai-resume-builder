import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useUser } from '@clerk/clerk-react'
import './App.css'
// import { Button } from "/components/ui/button"
import { Navigate, Outlet } from 'react-router-dom'

function App() {
  // const [count, setCount]= useState(0)
  const {User, isLoaded, isSignedIn} = useUser();

  if(!isSignedIn){
    return <Navigate to ={"/auth/sign-in"}/>
  }

  return  ( 
    <Outlet />

  )
}

export default App;
