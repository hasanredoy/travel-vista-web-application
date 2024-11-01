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
            className={`flex flex-col items-center p-5 rounded-md shadow-md border border-sky-100 w-full  max-h-80 justify-center gap-5 
             ${index == 0 && "bg-gradient-to-tr from-[#c5fcf9] via-[#fff] to-[#bafdf8]"}
             ${index == 1 && "bg-gradient-to-br from-[#e6fac5] via-[#fff] to-[#d4ff9b]"}
             ${index == 2 && "bg-gradient-to-tl from-[#c5fcf9] via-[#fff] to-[#bafdf8]"}
             ${index == 3 && "bg-gradient-to-bl from-[#e6fac5] via-[#fff] to-[#d4ff9b]"}
        
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
