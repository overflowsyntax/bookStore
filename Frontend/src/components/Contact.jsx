import React from 'react'
import Navbar from './Navbar'

const Contact = () => {
  return (
   <>
   <Navbar />
   <form action="#">

    <div className="flex flex-col items-center justify-center h-screen ">
        <h1 className='text-3xl font-bold'>Contact us</h1>
        <label htmlFor="fullName"> Name <br />
            <input type="text" placeholder='Name' className='rounded-md px-4 py-2 border-2 border-green-500' required='true' />
        </label><br />
        <label htmlFor="email"> Email <br />
            <input type="text" placeholder='Email' className='rounded-md px-4 py-2 border-2 border-green-500' required='true' />
        </label><br />
        <label htmlFor="message"> message <br />
            <textarea type="text" placeholder='message' className='w-80 h-28 rounded-md px-4 py-2 border-2 border-green-500' required='true' />
        </label><br /><br />

        <button className="btn btn-active btn-success " type='submit'>submit</button>
    </div>
   </form>
   </>
  )
}

export default Contact
