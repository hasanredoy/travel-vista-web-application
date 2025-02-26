
import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server"

export const POST = async(request)=>{
  const {email:userEmail} = await request.json()
  console.log(userEmail)
  try {
    const db =await connectDB()
    const tourCollection = await db.collection("tours")    
    const query = { host_email: userEmail };
    const tours = await tourCollection.find(query).toArray();
  return NextResponse.json({data:tours})
} catch (error) {
  console.log(error);
    return NextResponse.json({})
    
  }
}
