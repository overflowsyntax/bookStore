import React from 'react';

const Banner = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
      
      {/* TEXT FIRST ON LARGE SCREENS, IMAGE FIRST ON SMALL SCREENS */}
      <div className="md:w-1/2 mt-12 md:mt-32 order-2 md:order-1">
        <div className="md:ml-10 ml-6">
          <h1 className="text-4xl font-bold">
            Hello, welcome here to learn something <span className="text-pink-500">new everyday!!!</span>
          </h1>
          <p className="text-xl mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, vitae voluptatum? Est natus similique unde excepturi modi, ex fuga eveniet aspernatur facere saepe ipsa fugiat minima nostrum quasi, reprehenderit quam.
          </p>
          <div className="mt-5 sm:ml-3.5">
            <input className="input join-item" placeholder="Email" />
          </div>
          <button className="btn btn-secondary mt-4 md:ml-4">Secondary</button>
        </div>
      </div>

      {/* IMAGE SECOND ON LARGE SCREENS, IMAGE FIRST ON SMALL SCREENS */}
      <div className="md:w-1/2 flex justify-center md:justify-start order-1 md:order-2">
      <img 
  src="/Banner.png" 
  className="w-[90vw] md:w-[600px] lg:w-[700px] xl:w-[800px] h-auto mt-12 md:mt-32 md:ml-4" 
  alt="Banner" 
/>

      </div>

    </div>
  );
}

export default Banner;
