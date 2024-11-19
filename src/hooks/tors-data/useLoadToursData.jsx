'use client'
import axios from 'axios';
import { useEffect, useState } from 'react';

const useLoadToursData = () => {
  const [data,setData] = useState([])
  useEffect(()=>{
    axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/tours`)
    .then(res=>{
      setData(res?.data?.data)
    })
  },[])
  return data||[]
};

export default useLoadToursData;