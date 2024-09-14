"use client";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";

const SearchInput = () => {
  // state to show and hide date input
  const [showDateInput, setShowDateInput] = useState(false);

  // date state
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  return (
    <div className=" border-2 relative bg-white border-sky-500  rounded-md max-w-xs md:max-w-xl lg:max-w-3xl lg:min-w-[750px] flex md:flex-row flex-col justify-between items-center w-full">
    <div className=" pl-3 flex gap-3 items-center   w-full md:border-r-2 border-b-2 md:border-b-0 flex-1 border-sky-500">
      <CiLocationOn className=" md:text-2xl text-black"></CiLocationOn>
    <input
        className=" focus:bg-sky-100 py-3   px-3 outline-none placeholder:text-black"
        type="text"
        placeholder="Where to go  ?"
        name="search"
      />
    </div>
      <button
        title="click"
        className=" w-full md:w-32 font-bold border-b-2 border-sky-500 md:border-b-0 hover:bg-[#a6f8f1] py-3 "
        onClick={() => setShowDateInput(!showDateInput)}
      >
        Date ?
      </button>
      {/* start date inp  */}
      {showDateInput ? (
        <div className=" absolute top-10 left-[25%]">
          <DateRange
            rangeColors={["#01afa1"]}
            className="border border-sky-400 shadow-lg bg-base-300  rounded-lg"
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
          />
        </div>
      ) : (
        <></>
      )}
      <input
        type="number"
        className=" border-b-2 md:border-b-0 lg:border-l-2  w-full mb-3 md:mb-0 placeholder:text-black border-sky-500 py-3 px-5 outline-none"
        placeholder="How many Travelers?"
      />
      <button className=" md:border-l-2 border-sky-500 bg-gradient-to-r  from-[#71fdfd] via-[#4cfdee] to-[#61daf0]  py-3 w-32 hover:bg-gradient-to-r hover:from-white hover:to-white hover:via-white font-bold text-black ">
        Search
      </button>
    </div>
  );
};

export default SearchInput;
