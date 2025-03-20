import React from 'react'
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';


const Login = () => {

  const {
    register,
   
    handleSubmit,
   
    formState: { errors },
  } = useForm()

  const onSubmit =async (data) => {


    const userInfo ={
      password: data.password,
      email: data.email,
   
    }

    try{

      const store =await  fetch("http://localhost:3001/user/login", {
        method:"POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userInfo)
        
      })
      const response = await store.json()
      
      
    if(store.ok){
      // alert("login successful") 
      toast.success('Login success!' );
      setTimeout(() => {
        window.location.reload()
        
      }, 1400);
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
 <ToastContainer 
  position="top-right" 
  autoClose={2000}  
  hideProgressBar={false} 
  newestOnTop={true} 
  closeOnClick 
  closeButton={true}  // Ensures the close button is enabled
  rtl={false} 
  pauseOnFocusLoss={false}  
  draggable={false}  
  pauseOnHover={false}  
  theme="colored"
/>


 {/* You can open the modal using document.getElementById('ID').showModal() method */}
{/* <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}></button> */}

<dialog id="my_modal_3" className="modal">


<form action="/" onSubmit={handleSubmit(onSubmit)} >
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>

    <h3 className="font-bold text-lg">Login</h3>
    <div className='mt-5'>

   

  


        <label htmlFor="email">
            email
        </label>
        <br />
        <input type="email" id='email' className='outline-none border-2 text-white rounded-md p-2.5 input-theme' placeholder='Enter your email' name='email' {...register("email", { required: true })}/>
        <br />
        {errors.email && <span className='text-red-500'>This field is required</span>}
        <br /><br />
        
        <label htmlFor="password">
            password
        </label>
        <br />
        <input type="password" id='password' className='input-theme outline-none border-2 text-white rounded-md p-2.5' placeholder='Enter your password' name='password' {...register("password", { required: true })} /> 
        <br />
        {errors.password && <span className='text-red-500'>This field is required</span>}

    </div>
    <div className='flex justify-between mt-3 gap-4'>
        <button className='bg-pink-500 px-3 py-1 rounded-md cursor-pointer hover:text-white hover:bg-pink-700 duration-300' >Login</button>
        <p>not registered? <a className='text-blue-400' href="/signup">Signup</a></p>
    </div>
  </div>
        </form>
</dialog>
   </>
  )
}

export default Login