'use client'
import { useEffect, useState } from "react";

const DataLoader = (url) => {
      const [data , setData] = useState()
  const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/${url}`;
  useEffect(()=>{
     fetch(apiUrl)
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setData(data?.data)
    })
},[apiUrl])
    
    console.log(data);
    return data || [];

};

export default DataLoader;
