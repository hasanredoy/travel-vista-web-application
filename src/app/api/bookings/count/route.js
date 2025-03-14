import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const POST= async(request)=>{
  const email = await request.nextUrl.searchParams.get("email")
  try {
    const db = await connectDB()
    const findUserBookings =await db.collection("bookings").find({email}).toArray()
    const count = await findUserBookings.length
    return NextResponse.json({count})
  } catch (error) {
    console.log(error)
    return NextResponse.json({message:"error in server"})
  }
}