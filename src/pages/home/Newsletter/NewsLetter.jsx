/* eslint-disable react/no-unescaped-entities */

const NewsLetter = () => {
  return (
<div className='bg-gradient-to-br min-h-[200px] flex justify-center items-center from-[#b8e1fc]  via-[#ffffff] to-[#cbebfd]    my-20 '>
<section className='flex justify-between  items-center  my-10   w-[94%] md:w-[90%] lg:w-[75%] mx-auto '>

<div>
  <h1 className="text-4xl font-black mb-3 italic">Subscribe to Travel Vista! </h1>
  <p>Get special discount on your tour's by subscribing Travel Vista</p>
</div>
<div>
<form className="   flex justify-center items-center gap-5">
    <input
      type="text"
      placeholder="username@site.com"
      className="input input-bordered border-sky-400 -5 "
    />
    <button className="btn btn-primary ">Subscribe</button>

</form>
</div>
</section>
</div>
     
  );
};

export default NewsLetter;
