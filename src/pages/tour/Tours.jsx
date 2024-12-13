"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import ToursCard from "./ToursCard";
import useLoadToursData from "@/hooks/tors-data/useLoadToursData";
import useLoadCount from "@/hooks/useLoadCount";
import Pagination from "@/components/reuseble/Pagination";

const Tours = () => {
  // get params
  const params = useSearchParams();
  const categoryFormParams = params.get("from") || "";
  // state to handle delete user search info
  const [deleteSearchInfo, setDeleteSearchInfo] = useState(true);

  // state to handle category and set background color in category btn
  const [categoryBackground, setCategoryBackground] = useState("");
  // state form search info
  const [searchInfo, setSearchInfo] = useState("");
  // state to handle sort
  const [sortVal , setSortVal] = useState('')

  // call tours count 
  const toursCount = useLoadCount('tours/count')

  // state to handle current page 
  const [currentPage, setCurrentPage] = useState(0)

  
  useEffect(() => {
    // get search data from local storage
    const searchData = JSON.parse(localStorage.getItem("search-data"));
    if (searchData) {
      setSearchInfo(searchData);
    }
    // remove user search info from ls on user click 
    if (!deleteSearchInfo) {
      localStorage.removeItem("search-data");
      setSearchInfo(null);
    }
    if (categoryFormParams) {
      setCategoryBackground(categoryFormParams);
    }
  }, [categoryFormParams, deleteSearchInfo]);
    // get tours data
  const tours = useLoadToursData(deleteSearchInfo,categoryBackground,sortVal);

  return (
    <main className="min-h-screen relative my-20 w-[94%] md:w-[90%]  xl:w-[85%] mx-auto">
      {/* categories and filter container */}
      <section className=" flex  flex-col gap-10 md:flex-row  justify-between">
        {/* categories section  */}
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {categories?.map((category, index) => (
            <button
              onClick={() => setCategoryBackground(category?.category)}
              key={index}
              className={` ${
                categoryBackground == category?.category &&
                "bg-gray-300 border border-gray-600"
              } flex justify-center items-center rounded-lg gap-2 border border-sky-200 py-1 px-4`}
            >
              <h3>{category?.category?.split('_')[0]}</h3>
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
              <button className={` mb-2 ${sortVal=='low'&&'bg-gray-300'}`} onClick={()=>setSortVal('low')}>
                <a>Low - High </a>
              </button>
              <button  className={` ${sortVal=='high'&&'bg-gray-300'}`}  onClick={()=>setSortVal('high')}>
                <a>High - Low</a>
              </button>
            </ul>
          </details>
        </section>
      </section>
      {/* section to show user search info  */}
      <section className=" flex gap-5 justify-center items-center">
        {searchInfo && (
          <h2 className=" text-start md:text-center mt-7 text-base md:text-lg font-medium">
            You&apos;ve searched for{" "}
            <span className=" font-semibold text-sky-500">
              {searchInfo?.prompt}
            </span>
            , Date{" "}
            <span className=" font-semibold text-sky-500">
              {searchInfo?.date[0]?.startDate?.split("T")[0]}
            </span>{" "}
            From{" "}
            <span className=" font-semibold text-sky-500">
              {searchInfo?.date[0]?.endDate?.split("T")[0]}
            </span>
            , For{" "}
            <span className=" font-semibold text-sky-500">
              {searchInfo?.travelers}
            </span>{" "}
            person!
          </h2>
        )}
        {searchInfo && (
          <button
            onClick={() => setDeleteSearchInfo(!deleteSearchInfo)}
            title="Delete your search information?"
            className="  text-xl mt-6 text-red-600 bg-gray-200 shadow-lg h-6 w-6 flex items-center justify-center rounded-full hover:bg-white"
          >
            X
          </button>
        )}
      </section>
      {/* cards section  */}
      <section className=" my-14">
        <ToursCard tours={tours}></ToursCard>
      </section>
      {/* pagination section  */}
      <section>
     <Pagination count={toursCount} dataPerPage={5} currentPage={currentPage} setCurrentPage={setCurrentPage}></Pagination>
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
    category: "Wildlife_Safaris",
    image: "https://i.postimg.cc/fb30NLzS/wildlife-1.png",
  },
  {
    category: "City",
    image: "https://i.postimg.cc/DwCpLTpV/skyline.png"
  }
];
