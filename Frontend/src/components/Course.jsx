import React, { useEffect, useState } from 'react'
// import list from '../../public/list.json'
import Card from './Cards'

import {Link} from 'react-router-dom'



const Course = () => {

  const [list, setList] = useState([])

  useEffect(() => {

    

      
      async function fetchData() {

        try{
        
      // let data =await fetch("http://localhost:3001/book")
      let data =await fetch( `${import.meta.env.VITE_API_URL}/book`)
      data =await data.json()

      setList(data)
    }catch(err){
      console.log("error : " + err)
    }
  } 
    fetchData()
    
     
  },[])

  return (
   <>
   <div className='max-w-screen-2xl container mx-auto'>
    <div className='mt-36 justify-center justify-items-center  md:px-20 px-4 '>
      <h1 className='text-4xl md:text-6xl text-center '>We're delighted to have you <span className='text-pink-500'>Here : )</span></h1>
      <p className='mt-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi architecto ipsum esse, quidem ipsa possimus expedita! Numquam, neque facilis ratione sunt amet nam commodi deleniti velit expedita, cupiditate libero illum!</p>

    <Link to = "/">

      <button className='mt-6 px-4 py-2 rounded-md bg-pink-500 hover:bg-pink-700 cursor-pointer duration-1000'>Back</button>
    </Link>

    </div>
    <div className='grid grid-cols-1 md:grid-cols-4 md:mt-7'>
      {
        list.map((item) => {
         return <Card  item = {item} id={item.id}/>
        })
      }


    </div>

   </div>
   </>
  )
}

export default Course
