"use client"
import Heading from "@/components/reuseble/Heading";
import useDataLoader from "@/hooks/data-loader/useDataLoader";

const TravelStats =() => {
  const [stats] =useDataLoader("travel-stats");
  return (
    <section className=" w-[94%] my-10 md:w-[90%] lg:w-[85%] mx-auto">
      <Heading t1={"Our "} imp={" Statics"}></Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-10">
        {stats?.map((stat, index) => (
          <div
            key={index}
            className={` flex flex-col items-center p-5 rounded-md shadow-md border border-sky-100 w-full  max-h-80 justify-center gap-5 
             ${index == 0 && "bg-gradient-to-tr from-[#ffffff] via-[#d5fcfa] to-[#ffffff]"}
             ${index == 1 && "bg-gradient-to-br from-[#fff] via-[#e6fac5] to-[#ffffff]"}
             ${index == 2 && "bg-gradient-to-tl from-[#ffffff] via-[#d5fcfa] to-[#ffffff]"}
             ${index == 3 && "bg-gradient-to-bl from-[#fff] via-[#e6fac5] to-[#ffffff]"}        
        `}
          >
            <h1 className=" text-2xl font-black">{stat?.value}</h1>
            <h3 className=" text-xl font-semibold">{stat?.statistic}</h3>
            <p className=" text-base text-center">{stat?.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TravelStats;
