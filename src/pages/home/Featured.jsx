import Link from "next/link";
import Cards from "./Cards";
import SearchInput from "./SearchInput";

const Featured = () => {
  return (
    <div className="min-h-screen relative w-[94%] md:w-[90%] lg:w-[85%] mx-auto">
      <div className=" absolute -top-[30px] z-40 left-[20%]">
      <SearchInput></SearchInput>
      </div>

      <div className=" py-20">
      <Cards></Cards>
      <Link href={'/tours'} className=" flex justify-center mt-10"><button className="btn-primary">View More</button></Link>
      </div>

    </div>
  );
};

export default Featured;