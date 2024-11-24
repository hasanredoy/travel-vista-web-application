'use client'

import axios from "axios";
import { useEffect, useState } from "react";

const TourDetails = ({id}) => {
const [tour , setTour] = useState()
useEffect(()=>{
   axios.get(`${process.env,NEXT_PUBLIC_BASE_URL}/tours/${id}`)
   .then(res=> {
    console.log(res?.data);
    setTour(res?.data?.result)
   })
},[id])
  return (
    <div>
    </div>
  );
};

export default TourDetails;