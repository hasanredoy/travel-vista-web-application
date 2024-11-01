"use client";
import Heading from "@/components/reuseble/Heading";
import DataLoader from "@/hooks/data-loader/DataLoader";

const TravelStats = () => {
  const stats = DataLoader("travel-stats");
  return (
    <section>
      <Heading t1={'Our'} imp={'Statics'}></Heading>
      {stats.map((stat, index) => (
        <div className=" flex flex-col justify-center gap-5" key={index}>
          <h1 className=" text-2xl font-black">{stat?.value}</h1>
          <h3 className=" text-xl font-semibold">{stat?.statistic}</h3>
          <p className=" text-lg">{stat?.description}</p>
        </div>
      ))}
    </section>
  );
};

export default TravelStats;
