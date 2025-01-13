'use client'
import { useEffect, useState } from "react";

const useDataLoader = (url,text1) => {
      const [data , setData] = useState()
      const [loading , setLoading] = useState(true)
  const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/${url}`;
  useEffect(()=>{
     fetch(apiUrl)
    .then(res=>res.json())
    .then(data=>{
      setData(data?.data)
      setLoading(false)
    })
},[apiUrl])
    
    return [data,loading] || [];

};

export default useDataLoader;
