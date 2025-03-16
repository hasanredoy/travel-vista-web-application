
import { useEffect, useState } from "react";


const useLoadTestimonial = () => {
  const [data,setData] = useState([])
  useEffect(()=>{
    const TestimonialLoader = async()=>{
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/testimonial`)
        const data = await res.json()
         setData(data?.data)
      } catch (error) {
        console.log("Failed to load testimonial",error)
      }
    }
    TestimonialLoader()
  },[])
  return data||[]

};



export default useLoadTestimonial;
