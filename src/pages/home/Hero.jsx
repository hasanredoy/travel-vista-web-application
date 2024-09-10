import './home.css'
const Hero = () => {
  return (
<div
  className="hero min-h-[calc(100dvh-200px)] relative "
  style={{
    backgroundImage: "url(https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
  }}>
  <div className="hero-overlay w-full bg-opacity-40 bg-sky-700"></div>
  <div className=" absolute  top-[20%] left-[10%] ">
    <div className="max-w-md  text-white">
      <h1 className="mb-5 text-2xl md:text-3xl lg:text-5xl font-black"><span className=' text-[#BF2EF0]'>Discover</span> the World with Travel Vista</h1>
      <p className="mb-5 bg-black bg-opacity-10 ">
      Explore breathtaking destinations, plan unforgettable journeys, and unlock hidden gems across the globe. Your adventure starts here.
      </p>
      <button className=" btn-primary">Get Started</button>
    </div>
  </div>
</div>
  );
};

export default Hero;