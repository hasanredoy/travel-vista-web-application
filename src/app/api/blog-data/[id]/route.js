import { connectDB } from "@/lib/connectDB"

export const  GET=async()=>{
 
  try {
    const db = await connectDB()
  } catch (error) {
    
  }
}