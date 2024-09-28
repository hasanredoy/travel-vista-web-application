import { PiAirplaneTiltFill } from "react-icons/pi";

const Heading = ({desc,t1,imp,t2}) => {
  
  return (
    <div className=" py-5">
      <h1 className=" text-2xl font-black text-center pt-7 md:text-3xl lg:text-4xl pb-5">{t1}<span className=" bg-gradient-to-r bg-clip-text text-transparent  from-[#004e4e] via-[#02bbab] to-[#5be2fa]">{imp}</span>{t2}</h1>
      {desc&&<p className=" flex justify-center text-base font-medium md:font-semibold text-center  f gap-3 items-center md:text-lg"><PiAirplaneTiltFill className=" text-sky-600"></PiAirplaneTiltFill><span>{desc}</span><PiAirplaneTiltFill className=" -rotate-90 text-sky-600"></PiAirplaneTiltFill></p>}
    </div>
  );
};

export default Heading;