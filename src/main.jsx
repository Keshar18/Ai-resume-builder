import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import SignInPage from './auth/sign-in/index.jsx'


const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/auth/sign-in',
    element:<SignInPage/>,
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
