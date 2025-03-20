import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

const Logout = () => {

    const [authUser, setAuthUser] = useAuth()
    function handleLogout() {
        try {
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("Users")
            toast.success("Logout successful")
            setTimeout(() => {
                
                window.location.reload()
            }, 1500);
        } catch (error) {
            toast.error("Error " + error.message)
            
        }
    }

  return (
    <div onClick={handleLogout}> 
      <button className='px-3 py-2 bg-red-500 text-white cursor-pointer rounded-md hover:bg-red-700'>Logout</button>
    </div>
  )
}

export default Logout
