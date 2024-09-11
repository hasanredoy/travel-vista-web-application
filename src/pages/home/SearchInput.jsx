'use client'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { useState } from 'react';

const SearchInput = () => {
// state to show and hide date input
const [showDateInput,setShowDateInput] = useState(false)

// date state 
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);
  
  return (
    <div className=' border-2 relative bg-white border-sky-500  rounded-md max-w-2xl flex justify-between items-center w-full'>
      <input className=' py-3  px-3 outline-none placeholder:text-black   border-r-2 flex-1 border-sky-500' type="text" placeholder="Where to go  ?" name="search"  />
      <button className='  w-32 font-bold hover:bg-[#a6f8f1] py-3 ' onClick={()=>setShowDateInput(!showDateInput)}>Dates?</button>
      {/* start date inp  */}
      {showDateInput?<div className=' absolute top-10 left-20'>

<DateRange
rangeColors={['#61daf0']}
className='border border-sky-400 bg-base-300  rounded-lg'
editableDateInputs={true}
onChange={item => setDate([item.selection])}
moveRangeOnFirstSelection={false}
ranges={date}
/>
</div>:<></>}
       <input type="text" className=' border-l-2 placeholder:text-black border-sky-500 py-3 px-5 outline-none' placeholder='How many Travelers?' />
      <button className=' border-l-2 border-sky-500 bg-gradient-to-r  from-[#71fdfd] via-[#4cfdee] to-[#61daf0]  py-3 w-32 hover:bg-gradient-to-r hover:from-white hover:to-white hover:via-white font-bold text-black '>Search</button>
    </div>
  );
};

export default SearchInput;