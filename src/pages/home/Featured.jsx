import Link from "next/link";
import Cards from "./Cards";
import SearchInput from "./SearchInput";
import Heading from "@/components/reuseble/Heading";

const Featured = () => {
  return (
    <div className="min-h-screen relative w-[94%] md:w-[90%] lg:w-[85%] mx-auto">
      <div className=" hidden absolute -top-[30px] z-40 left-0 lg:left-[20%]">
      <SearchInput></SearchInput>
      </div>

      <Heading desc={'Discover lesser-known treasures around the globe'} t1={" Dream"} imp={' Explore'} t2={' Repeat'}></Heading>
      <div className=" py-20">
      <Cards></Cards>
      <Link href={'/tours'} className=" flex justify-center mt-10"><button className="btn-primary">View More</button></Link>
      </div>

    </div>
  );
};

export default Featured;