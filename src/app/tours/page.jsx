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
    <main>
      {/* categories and filter container */}
      <section>
        {/* categories section  */}
        <section>
          {categories?.map((category, index) => (
            <div key={index}>
              <h3>{category?.category}</h3>
             <Image alt={category?.category} src={category?.image}
             width={40}
             height={40}
             ></Image>
            </div>
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
