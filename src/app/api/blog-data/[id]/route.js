import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server"

export const  GET=async(request,{params})=>{
 
  try {
    const id = params?.id
    const db = await connectDB()
    const blogsCollection = await db.collection("blogs")
    const result = await blogsCollection.findOne({_id: new ObjectId(id)})
    return NextResponse.json({data:result})
  } catch (error) {
    return NextResponse.json({error})
  }
}