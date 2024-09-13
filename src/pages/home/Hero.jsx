'use client'
import Carousel from './Carousel';
import './home.css'

const Hero = () => {
  return (
<div
  className="hero min-h-[calc(100dvh-0px)] md:min-h-[calc(100dvh-200px)] relative "
  style={{
    backgroundImage: "url(https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
  }}>
  <div className="hero-overlay w-full bg-opacity-50 bg-black"></div>

  <section className=' flex justify-between items-center gap-10 md:gap-14 md:px-10 lg:gap-20 flex-col md:flex-row  '>
  <div className=" ">
    <div className="max-w-md md:text-start text-center lg:p-0 pt-10 px-5 pb-0  text-white">
      <h1 className="mb-5 text-2xl  md:text-3xl lg:text-5xl font-black"><span className=' text-[#FFDC7F]  bg-gradient-to-r bg-clip-text text-transparent from-[#71fdfd] via-[#4cfdee] to-[#61daf0]'>Discover</span> the World with Travel Vista</h1>
      <p className="mb-5  text-sm md:text-base lg:text-lg bg-opacity-10 ">
      Explore breathtaking destinations, plan unforgettable journeys, and unlock hidden gems across the globe. Your adventure starts here.
      </p>
      <button className=" btn-primary">Book Now</button>
    </div>
  </div>
  <div className=" ">
    <Carousel></Carousel>
  </div>
  </section>
</div>
  );
};

export default Hero;