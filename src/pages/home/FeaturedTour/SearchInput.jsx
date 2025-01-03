"use client";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi";
import { MdOutlineShowChart } from "react-icons/md";
import { useRouter } from "next/navigation";




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
  // state handle prompt 
  const [ prompt ,setPrompt] = useState()

  // get router 
  const router = useRouter()

  // state to handle visibility of prompt
  const [focus , setFocus] = useState(false)
  const [searchInputValue, setSearchInputValue] = useState()


  // handler for search input 
  const handleSearch=(e)=>{
   e.preventDefault()
   const searchData = {
       prompt: e?.target?.search?.value,
       travelers: e?.target?.travelers?.value,
       date,
   }
   localStorage.removeItem("search-data")
   localStorage.setItem("search-data",JSON.stringify(searchData))
   router.push('tours')
   
  }
  

  useEffect(()=>{
    // get access of prompt form local storage 
    const getPrompt = localStorage.getItem('prompt')
    // if there is not any prompt in local storage then set these dummy prompt in local storage 
  
    if(!getPrompt){
      localStorage.setItem('prompt',"Dubai, UAE. Moscow, Russia. Sydney, Australia. Machu Picchu, Peru.Kyoto, Japan. Cape Town, South Africa. Banff National Park, Canada.  Santorini, Greece")
    }
    const splitPrompt = getPrompt?.split('.')
   
    setPrompt(splitPrompt)
  },[])


  return (
    <form onSubmit={handleSearch} className=" border-0 md:border-2  relative  shadow-md shadow-black md:shadow-none bg-white border-gray-400 md:border-sky-500  rounded-md max-w-[280px] md:max-w-2xl lg:max-w-3xl lg:min-w-[750px] flex md:flex-row flex-col justify-between items-center w-full">
      <div className=" relative pl-3 flex gap-2 lg:gap-3 items-center   w-full md:border-r-2 border-b md:border-b-0 flex-1 border-gray-400 md:border-sky-500">
        <CiLocationOn className=" md:text-2xl text-black"></CiLocationOn>
        {/* search input  */}
        <input
          className=" focus:bg-sky-100 py-3 px-3  md:px-0 lg:px-3 outline-none placeholder:text-black"
          type="text"
          placeholder="Where to go?"
          name="search"
          value={searchInputValue}
          
          onFocus={()=>setFocus(true)}
          onBlur={()=>setFocus(false)}
          autoComplete="off" // prevents default suggestion
          required

        />
    
      </div>
      {/* text to show while the input field in focus */}
      {focus&&<div className=" absolute flex flex-col p-5 bg-base-200 border shadow-md gap-3 top-10 left-0 rounded-md shadow-gray-500 ">
        {prompt&&prompt.map((singlePrompt,index)=><h5 onMouseEnter={()=>setSearchInputValue(singlePrompt)} key={index} className=" cursor-pointer hover:font-bold text-base font-medium flex gap-5 items-center justify-between">{singlePrompt}<MdOutlineShowChart title="top ranked" className=" text-lg"></MdOutlineShowChart></h5>)}
      </div>}
      {/* date button  */}
      <h4
        title="click"
        className=" pl-3 w-full  md:w-20 lg:w-40 md:min-w-32 lg:min-w-40 lg:max-w-40 px-3  lg:px-5  flex gap-5 md:gap-6 items-center font-bold border-b border-gray-400 md:border-sky-500 md:border-b-0 hover:bg-[#a6f8f1] py-3 "
        onClick={() => setShowDateInput(!showDateInput)}
      >
        <IoCalendarNumberOutline className=" md:text-xl"></IoCalendarNumberOutline>{" "}
        Date ?
      </h4>
      {/* date inp  */}
      {showDateInput ? (
        <div className=" absolute top-28  md:top-10 flex justify-center w-full">
          <DateRange
            rangeColors={["#01afa1"]}
            className="border max-w-[320px]  md:max-w-lg border-sky-400 shadow-lg bg-base-300  rounded-lg"
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
          />
        </div>
      ) : (
        <></>
      )}
      {/* choose travelers inp  */}
      <div className=" mb-3 md:mb-0  pl-3 md:pl-2 lg:pl-3 flex gap-3 items-center   w-full md:border-l-2 border-b md:border-b-0 flex-1 border-gray-400 md:border-sky-500">
        <HiUserGroup className=" md:text-2xl"></HiUserGroup>
        <input
          type="number"
          name="travelers"
          className="  w-full placeholder:text-black  py-3 px-2 lg:px-5 outline-none"
          placeholder="How many Travelers?"
          min={1}
          required
        />
      </div>
      <button className=" md:border-l-2 border-gray-400 md:border-sky-500 bg-gradient-to-tr  from-[#f9fafa] via-[#4cfdee] to-[#f0f4f5]  py-3 w-32 hover:bg-gradient-to-r hover:from-white hover:to-white hover:via-white font-bold text-black rounded-md mb-3 md:mb-0 md:rounded-none ">
        Search
      </button>
    </form>
  );
};

export default SearchInput;
