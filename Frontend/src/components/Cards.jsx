import React from 'react'

const Card = ({item,id}) => {
  
  return (
  <>
  <div className="p-3 card bg-base-100 w-96 shadow-sm hover:shadow-blue-200 hover:border-amber-400 hover:scale-105 transition-transform duration-300">
  <figure>
  <img 
  className="w-[300px] h-[350px] object-cover rounded-lg 
             hover:w-[350px] hover:h-[400px] transition-all duration-300 cursor-pointer" 
  src={item.image} 
  alt="book" 
/>

  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">New</div>
    </h2>
      <div className='font-bold '>Category : {item.category}</div>
    <p>{item.title}</p>
    <div className="card-actions flex justify-around">
      <div className="badge badge-outline cursor-pointer">${item.price}</div>
      <div className="badge badge-outline cursor-pointer p-4 hover:bg-pink-500">Buy Now</div>
    </div>
  </div>
</div>
</>
  )
}

export default Card
