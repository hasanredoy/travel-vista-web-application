"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Tours = () => {
  // state to set background color in category btn
  const [categoryBackground, setCategoryBackground] = useState("");
  useEffect(() => {
    // get search data from local storage
    const searchData = JSON.parse(localStorage.getItem("search-data"));
    console.log(searchData);
  }, []);
  return (
    <main className="min-h-screen relative my-20 w-[94%] md:w-[90%] lg:w-[85%] mx-auto">
      {/* categories and filter container */}
      <section className=" flex justify-between">
        {/* categories section  */}
        <section className=" flex gap-5">
          {categories?.map((category, index) => (
            <button
              onClick={() => setCategoryBackground(category?.category)}
              key={index}
              className={` ${
                categoryBackground == category?.category &&
                "bg-gray-200 border border-gray-600"
              } flex items-center rounded-lg gap-2 border border-sky-200 py-1 px-4`}
            >
              <h3>{category?.category}</h3>
              <img
                alt={category?.category}
                src={category?.image}
                width={40}
                height={40}
              ></img>
            </button>
          ))}
        </section>
        {/* filter section  */}
        <section>
          <details className="dropdown">
            <summary className="btn m-1">Sort By</summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-44 p-2 shadow">
              <li>
                <a>Low - High </a>
              </li>
              <li>
              <a>High - Low</a>
              </li>
            </ul>
          </details>
        </section>
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
