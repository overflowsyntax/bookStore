import React from 'react'
import Login from './Login'
import { useForm } from "react-hook-form"
import { Link, Navigate, useNavigate,  } from 'react-router-dom'
import Navbar from "./Navbar"
import toast from 'react-hot-toast'




const Signup = () => {

  const navigate = useNavigate();

  
    const {
      register,
     
      handleSubmit,
     
      formState: { errors },
    } = useForm()
  
    const onSubmit = async (data) => {

      const userInfo ={
        fullName : data.fullName,
        email: data.email,
        password: data.password
      }

      try{

        const store =await  fetch(`${import.meta.env.VITE_API_URL}/user/signup`, {
          method:"POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(userInfo)
          
        })
        const response = await store.json()
  
        
      if(store.ok){
        toast.success("Signup successful", {
          theme: "colored"
         
        })
        setTimeout(() => {
          navigate("/")
          
        }, 1300);
        
        localStorage.setItem("Users",JSON.stringify( response.user))
      } else{
        
      
        toast.error("Error "+ response.message) 
        
        
        
        
      }
    }catch(err){
      toast.error("Error "+ response.message) 
      
      
    }


    }
  
  return (
   <>
   {/* <ToastContainer /> */}
     <Navbar />
  <div className='flex h-screen justify-center items-center'>
  <div id="my_modal_3" className="">

    <form action="#" onSubmit={handleSubmit(onSubmit)} >
  <div className="border-2 shadow-amber-300 p-8 rounded-md relative">
    <form method="div">
      {/* if there is a button in form, it will close the modal */}

        <a href="/">
       <button  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"> ✕</button>
        </a>
      
      
    </form>

    <a href="/"><button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></a>
    <h3 className="font-bold text-lg">Login</h3>
    <div className='mt-5'>
        <label htmlFor="fullName">
            full name
        </label>
        <br />
        <input type="text" id='fullName' className='input-theme outline-none border-2 text-white rounded-md p-2.5' placeholder='Enter your full name' name='fullName'  {...register("fullName", { required: true })} /> <br />
        {errors.fullName && <span className='text-red-500'>This field is required</span>}
        <br /><br />
        
        <label htmlFor="email">
            email
        </label>
        <br />
        <input type="email" id='email' className='input-theme outline-none border-2 text-white rounded-md p-2.5' placeholder='Enter your email' name='email' {...register("email", { required: true })} /> <br />
        {errors.email && <span className='text-red-500'>This field is required</span>}
        <br /><br />
        
        <label htmlFor="password">
            password
        </label>
        <br />
        <input type="password" id='password' className='input-theme outline-none border-2 text-white rounded-md p-2.5' placeholder='Enter your password' name='password' {...register("password", { required: true })} /> <br />
        {errors.password && <span className='text-red-500'>This field is required</span>}
    </div>
    <div className='flex justify-between mt-3'>
        <button className='bg-pink-500 px-3 py-1 rounded-md cursor-pointer hover:bg-pink-700 duration-300' >Login</button>
        <p>have account? <a href="/" className='text-blue-400'
          onClick=  {() => document.getElementById("my_modal_3").showModal()}>Login</a>
            
        </p>
    </div>
  </div>
    </form>
</div>
   
  </div>
   </>
  )
}

export default Signup
