import React from 'react'
import Home from './home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Courses from './courses'
import Signup from './components/Signup'
import Contact from './components/Contact'
import  { Toaster } from 'react-hot-toast';
import { useAuth } from '../src/context/AuthProvider'


const App = () => {

  const [authUser, setAuthUser] = useAuth()


  return (
    <>
    <div>

    <Routes>
      
      
      <Route path='/' element={<Home />} />
      <Route path='/course' element={authUser ?<Courses /> : <Navigate to={"/signup"}/> } />
      <Route path='/signup' element={<Signup />} />
      <Route path='/contact' element={<Contact />}/>

    </Routes>
    <Toaster />
    
    </div>
    </>
  )
}

export default App
