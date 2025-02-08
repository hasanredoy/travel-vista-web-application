import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const POST = async(request)=>{
  const emailFromClient = await request.json()
  try {
    const db = await connectDB()
    const userCollection = await db.collection("users")||[]
    const findUser = await userCollection.findOne({email:emailFromClient?.email})
    const user_role = await findUser?.type||""
  return NextResponse.json({user_role})
} catch (error) {
  console.log(error);
    return NextResponse.json({})
    
  }
}


