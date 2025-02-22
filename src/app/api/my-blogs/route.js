
import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server"

export const POST = async(request)=>{
  const {email:userEmail} = await request.json()
  try {
    const db =await connectDB()
    const blogCollection = await db.collection("blogs")    
    const query = { email: userEmail };
    const blogs = await blogCollection.find(query).toArray();
  return NextResponse.json({data:blogs})
} catch (error) {
  console.log(error);
    return NextResponse.json({})
    
  }
}
