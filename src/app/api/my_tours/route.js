
import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
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

export const DELETE = async (request) => {
  const id = await request.nextUrl.searchParams.get("id");
  try {
    const db = await connectDB();
    const toursCollection = await db.collection("tours");
    const deleteTour = await toursCollection.deleteOne({
      _id: new ObjectId(id),
    });
    return NextResponse.json({ data: deleteTour });
  } catch (error) {
    console.log(error);
    return NextResponse.json({});
  }
};
