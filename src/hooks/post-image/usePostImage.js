"use client"

import { useState } from "react"

const API = proccess.env.NEXT_PUBLIC_IMGBB_API_KEY
export const usePostImage =(image,setLoading)=>{
const [imageUrl , setImageUrl] = useState(null)
const imageData = new FormData()
imageData.append('image',image)
try {
  
} catch (error) {
  
}
return(
  <div></div>
)
}
