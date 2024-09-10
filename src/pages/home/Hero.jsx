import './home.css'
const Hero = () => {
  return (
<div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://img.freepik.com/free-photo/aerial-view-sandy-beach-with-tourists-swimming-beautiful-clear-sea-water-sumilon-island-beach-landing-near-oslob-cebu-philippines-boost-up-color-processing_1253-981.jpg?t=st=1725964984~exp=1725968584~hmac=16fcc8a2a5f04bfd6244b12f10d2128c9ee02273f4e6f64942d07923fe5ab9ed&w=826)",
  }}>
  <div className="hero-overlay bg-sky-500 bg-opacity-40"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  );
};

export default Hero;