'use client'
import axios from 'axios';
import { useEffect, useState } from 'react';

const useLoadToursData = (deleteSearchInfo,categoryBackground,sortVal) => {
  const [data,setData] = useState([])
  console.log(categoryBackground);
  useEffect(()=>{
    console.log('hello');
    const prompt = JSON.parse(localStorage.getItem('search-data'))
    // this will upper case the first letter of the prompt 
    const upperCase = prompt?String(prompt?.prompt[0]).toUpperCase()+String(prompt?.prompt).slice(1):""
    axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/tours?search=${upperCase?upperCase:''}&category=${categoryBackground}&sort=${sortVal}`)
    .then(res=>{
      setData(res?.data?.data)
    })
  },[deleteSearchInfo,categoryBackground])
  return data||[]
};

export default useLoadToursData;