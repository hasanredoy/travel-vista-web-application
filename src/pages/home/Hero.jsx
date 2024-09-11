'use client'
import Carousel from './Carousel';
import './home.css'
const Hero = () => {
  return (
<div
  className="hero min-h-[calc(100dvh-200px)] relative "
  style={{
    backgroundImage: "url(https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
  }}>
  <div className="hero-overlay w-full bg-opacity-50 bg-black"></div>
  <div className=" absolute top-0 w-full min-w-full px-8 py-2 bg-black bg-opacity-40 text-white">
	<div className="flex items-center mx-auto container justify-center md:justify-between py-2">
		<div>
			<span>Get up to 50% off on your fist trip!</span> {' '}
			<a href="#" rel="noopener noreferrer" className="underline">Book a trip </a>today!
		</div>
		<a href="#" rel="noopener noreferrer" className="items-center gap-2 hidden md:flex">
			<svg role="img" viewBox="0 0 22 22" className="fill-current h-4 w-4">
				<path clipRule="evenodd" d="M6.5 1.75a1.75 1.75 0 100 3.5h3.51a8.785 8.785 0 00-.605-1.389C8.762 2.691 7.833 1.75 6.5 1.75zm5.49 3.5h3.51a1.75 1.75 0 000-3.5c-1.333 0-2.262.941-2.905 2.111a8.778 8.778 0 00-.605 1.389zM1.75 6.75v3.5h18.5v-3.5H1.75zm18 5H21a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75h-2.761a3.25 3.25 0 00-2.739-5c-2.167 0-3.488 1.559-4.22 2.889a9.32 9.32 0 00-.28.553 9.32 9.32 0 00-.28-.553C9.988 1.809 8.667.25 6.5.25a3.25 3.25 0 00-2.739 5H1A.75.75 0 00.25 6v5c0 .414.336.75.75.75h1.25V21c0 .414.336.75.75.75h16a.75.75 0 00.75-.75v-9.25zm-1.5 0H3.75v8.5h14.5v-8.5z" fillRule="evenodd"></path>
			</svg>
			<span className="hover:underline focus-visible:underline">Gift Cards</span>
		</a>
	</div>
</div>
  <div className=" absolute  top-[20%] left-[10%] ">
    <div className="max-w-md  text-white">
      <h1 className="mb-5 text-2xl bg-black bg-opacity-15 md:text-3xl lg:text-5xl font-black"><span className=' text-[#FFDC7F]  bg-gradient-to-r bg-clip-text text-transparent from-[#71fdfd] via-[#4cfdee] to-[#61daf0]'>Discover</span> the World with Travel Vista</h1>
      <p className="mb-5 bg-black bg-opacity-10 ">
      Explore breathtaking destinations, plan unforgettable journeys, and unlock hidden gems across the globe. Your adventure starts here.
      </p>
      <button className=" btn-primary">Get Started</button>
    </div>
  </div>
  <div className=" absolute  top-[5%] right-[10%] ">
    <Carousel></Carousel>
  </div>
</div>
  );
};

export default Hero;