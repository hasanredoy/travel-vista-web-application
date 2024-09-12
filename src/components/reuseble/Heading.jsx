import { PiAirplaneTiltFill } from "react-icons/pi";

const Heading = ({desc,t1,t2,imp}) => {
  
  return (
    <div>
      <p className=" text-base font-semibold text-center my-3 flex gap-3 items-center md:text-lg"><PiAirplaneTiltFill></PiAirplaneTiltFill><span>{desc}</span><PiAirplaneTiltFill className=" rotate-180"></PiAirplaneTiltFill></p>
      <h1 className=" text-2xl font-black text-center my-2 md:text-3xl lg:text-4xl ">{t1}<span className=" bg-gradient-to-r bg-clip-text text-transparent from-[#71fdfd] via-[#4cfdee] to-[#61daf0]">{imp}</span>{t2}</h1>
    </div>
  );
};

export default Heading;