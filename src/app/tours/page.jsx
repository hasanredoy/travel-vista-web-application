"use client";
import Image from "next/image";
import { useEffect } from "react";

const Tours = () => {
  useEffect(() => {
    // get search data from local storage
    const searchData = JSON.parse(localStorage.getItem("search-data"));
    console.log(searchData);
  }, []);
  return (
    <main className="min-h-screen relative my-20 w-[94%] md:w-[90%] lg:w-[85%] mx-auto">
      {/* categories and filter container */}
      <section>
        {/* categories section  */}
        <section className=" flex gap-5">
          {categories?.map((category, index) => (
            <button key={index} className="  bg-gray-200 flex items-center rounded-lg gap-2 border border-sky-200 py-1 px-4">
              <h3>{category?.category}</h3>
             <img alt={category?.category} src={category?.image}
             width={40}
             height={40}
             ></img>
            </button>
          ))}
        </section>
        {/* filter section  */}
        <section></section>
      </section>
    </main>
  );
};

export default Tours;

const categories = [
  {
    category: "Adventure",
    image: "https://i.postimg.cc/MHVwV89P/route-1.png",
  },
  {
    category: "Beach",
    image: "https://i.postimg.cc/28bXSw16/sun-umbrella-1.png",
  },
  {
    category: "Mountain",
    image: "https://i.postimg.cc/sgZFbzYT/mountain-2.png",
  },
  {
    category: "Wildlife ",
    image: "https://i.postimg.cc/fb30NLzS/wildlife-1.png",
  },
  {
    category: "Cruises",
    image: "https://i.postimg.cc/vmYf1qSd/ship.png",
  },
];
