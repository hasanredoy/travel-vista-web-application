"use client";
import Heading from "@/components/reuseble/Heading";
import DataLoader from "@/hooks/data-loader/DataLoader";

const TravelStats = () => {
  const stats = DataLoader("travel-stats");
  return (
    <section className=" w-[94%] my-10 md:w-[90%] lg:w-[85%] mx-auto">
      <Heading t1={'Our'} imp={'Statics'}></Heading>
  <div className=" flex gap-10">
  {stats.map((stat, index) => (
        <div className=" flex flex-col justify-center gap-5" key={index}>
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
