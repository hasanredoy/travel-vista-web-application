import { ObjectId } from "mongodb"

const { connectDB } = require("@/lib/connectDB")
const { NextResponse } = require("next/server")

export const GET =async(request)=>{

  try {
    const db = await connectDB()    
    const hosts = await db.collection("hosts").find().toArray()
    return NextResponse.json({data:hosts})
  } catch (error) {
    console.log(error)
    return NextResponse.json({})
    
  }
}
export const POST = async (request) => {
  const hostInfo = await request.json();
  const email = await request.nextUrl.searchParams.get("email")
  try {
    const db = await connectDB();
    const hostsCollection = await db.collection("hosts");
    if(email){
      const findHost= await hostsCollection.findOne({email:email})
      console.log( findHost)
      const status = await findHost?.status
      console.log(status)
      return NextResponse.json({status})
    }
    const result = await hostsCollection.insertOne(hostInfo);
    return NextResponse.json({ data: result });
  } catch (error) {
    console.log(error);
    return NextResponse.json({});
  }
};


export const DELETE = async (request) => {
  const id = await request.nextUrl.searchParams.get("id");
  try {
    const db = await connectDB();
    const reviewsCollection = await db.collection("reviews");
    const deleteReview = await reviewsCollection.deleteOne({
      _id: new ObjectId(id),
    });
    return NextResponse.json({ data: deleteReview });
  } catch (error) {
    console.log(error);
    return NextResponse.json({});
  }
};



