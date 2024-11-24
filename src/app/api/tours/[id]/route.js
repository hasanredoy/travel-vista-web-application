import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const GET = async({request,params})=>{
  const id= params?.id
  try {
    const db = await connectDB()
    const toursCollection = await db.collection('tours')
    const result = await toursCollection.findOne({data_id:id})
    NextResponse.json({result})

  } catch (error) {
    NextResponse.error(error)    
  }
}