import React from 'react'

const Login = () => {
  return (
   <>
 {/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}></button>
<dialog id="my_modal_3" className="modal">
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
        <p>not registered? <a className='text-blue-400' href="/signup">Signup</a></p>
    </div>
  </div>
</dialog>
   </>
  )
}

export default Login
