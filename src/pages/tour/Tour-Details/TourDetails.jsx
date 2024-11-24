'use client'

import axios from "axios";
import { useEffect, useState } from "react";

const TourDetails = ({id}) => {
// state to handle tour data
const [tour , setTour] = useState()
const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/tours/${id}`
console.log(url);
useEffect(()=>{
   axios.get(url)
   .then(res=> {
    console.log(res?.data?.result);
    setTour(res?.data?.result)
   })
},[id])
  return (
    <div>
    </div>
  );
};

export default TourDetails;