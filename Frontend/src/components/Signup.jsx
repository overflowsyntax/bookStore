import React from 'react'
import Login from './Login'

const Signup = () => {
  return (
   <>
  <div className='flex h-screen justify-center items-center'>
  <div id="my_modal_3" className="">
  <div className="border-2 shadow-amber-300 p-8 rounded-md relative">
    <form method="div">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>

    <a href="/"><button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></a>
    <h3 className="font-bold text-lg">Login</h3>
    <div className='mt-5'>
        <label htmlFor="fullName">
            full name
        </label>
        <br />
        <input type="text" id='fullName' className='outline-none border-2 text-white rounded-md p-2.5' placeholder='Enter your full name' name='fullName' />
        <br /><br />
        
        <label htmlFor="email">
            email
        </label>
        <br />
        <input type="email" id='email' className='outline-none border-2 text-white rounded-md p-2.5' placeholder='Enter your email' name='email' />
        <br /><br />
        
        <label htmlFor="password">
            password
        </label>
        <br />
        <input type="password" id='password' className='outline-none border-2 text-white rounded-md p-2.5' placeholder='Enter your password' name='password' />
    </div>
    <div className='flex justify-between mt-3'>
        <button className='bg-pink-500 px-3 py-1 rounded-md cursor-pointer hover:bg-pink-700 duration-300' >Login</button>
        <p>have account? <a href="/" className='text-blue-400'
          onClick=  {() => document.getElementById("my_modal_3").showModal()}>Login</a>
            
        </p>
    </div>
  </div>
</div>
   
  </div>
   </>
  )
}

export default Signup
