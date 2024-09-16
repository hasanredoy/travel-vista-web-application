'use client'
import axios from "axios"
import { useEffect, useState } from "react";

const useLoadPopularTourData = () => {
  const [data,setData] = useState([])
  useEffect(()=>{
    axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/popular-tour`)
    .then(res=>{
      // console.log(res.data);
      setData(res?.data?.data)
    })
  },[])
  return data||[]

};

export default useLoadPopularTourData;
