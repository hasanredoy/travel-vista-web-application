"use client";
import Heading from "@/components/reuseble/Heading";
import DataLoader from "@/hooks/data-loader/DataLoader";

const TravelStats = () => {
  const stats = DataLoader("travel-stats");
  return (
    <section className=" w-[94%] my-10 md:w-[90%] lg:w-[85%] mx-auto">
      <Heading t1={"Our "} imp={" Statics"}></Heading>
      <div className=" flex gap-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-5 rounded-md shadow-md border border-sky-200 w-full  max-h-96 justify-center gap-5 
             ${index == 0 && "bg-gradient-to-tr from-[#b3faee] via-[#fff] to-[#9bffff]"}
             ${index == 1 && "bg-gradient-to-br from-[#f8b3fa] via-[#fff] to-[#f39bff]"}
             ${index == 2 && "bg-gradient-to-tl from-[#b3faf6] via-[#fff] to-[#9bfff7]"}
             ${index == 3 && "bg-gradient-to-bl from-[#f8b3fa] via-[#fff] to-[#f39bff]"}
        
        `}
          >
            <h1 className=" text-2xl font-black">{stat?.value}</h1>
            <h3 className=" text-xl font-semibold">{stat?.statistic}</h3>
            <p className=" text-lg">{stat?.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TravelStats;
