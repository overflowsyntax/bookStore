import React from 'react'

import dataList  from "../../public/list.json"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from './Cards';





const FreeBook = () => {
    
    const data = dataList.filter((data) => {
        return data.price =="0"
    })
    console.log(data);
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };


  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
        <h1 className='font-bold text-xl pb-2.5 mt-10'>Free offered books</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, provident impedit optio rerum incidunt maiores obcaecati nihil possimus hic quod veritatis ipsa quisquam perferendis natus doloremque, repellat deleniti numquam autem.</p>
    </div>

    <div className=' pb-2.5 mt-10 md:ml-20  w-[90vw]'>
    <div className="slider-container">
     
      <Slider {...settings}>
        {data.map((item) => {
         
         return <Card item = {item} id = {item.id} />
         

        })}
      </Slider>
    </div>
  
    </div>
    
    </>
  )
}

export default FreeBook
