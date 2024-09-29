import Link from "next/link";
import Cards from "./Cards";
import SearchInput from "./SearchInput";
import Heading from "@/components/reuseble/Heading";

const Featured = () => {
  return (
    <div className="min-h-screen relative w-[94%] md:w-[90%] lg:w-[85%] mx-auto">
      <div className="absolute z-40 -top-10 md:-top-[20px] lg:-top-[30px] flex w-full justify-center">
      <SearchInput></SearchInput>
      </div>
      <div className=" w-full h-14"></div>
<div  className=" pt-28 md:pt-0">
  
<Heading desc={'Discover lesser-known treasures'} t1={" Dream"} imp={' Explore'} t2={' Repeat'}></Heading>
</div>
      <div className=" py-20">
      <Cards></Cards>
      <Link href={'/tours'} className=" flex justify-center mt-10"><button className="btn-primary">View More</button></Link>
      </div>

    </div>
  );
};

export default Featured;