'use client'
import { useEffect } from "react";

const Tours = () => {
 useEffect(()=>{
  const searchData = JSON.parse(localStorage.getItem("search-data"))
console.log(searchData)
 },[])
  return (
    <main>
      
    </main>
  );
};

export default Tours;