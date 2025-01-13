"use client"

import axios from "axios";
import { useEffect, useState } from "react";

const useLoadCount = (url) => {
  const [count , setCount] = useState()
  useEffect(()=>{
    axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/${url}`)
    .then(res=>{
      setCount(res?.data?.count)
    })
  },[url])
  return count||0
};

export default useLoadCount;