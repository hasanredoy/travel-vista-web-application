import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server"

export const GET=async(request)=>{
  const email = await request.nextUrl.searchParams.get("email")
  try {
    const db = await connectDB()
    // //console.log('hello');
    const paymentCollections = await db.collection('payments')
    //console.log({email});
  // //console.log({reviewsCollections});
  const result = await paymentCollections.find({email}).toArray()
  //console.log({result},'hello2');
  return NextResponse.json({result})
} catch (error) {
   return NextResponse.json({error})
  
 }
}
export const POST=async(request)=>{
  const paymentData = await request.json()
  const email= await paymentData?.email
  try {
    const db = await connectDB()
  const paymentCollections = await db.collection('payments')
  const result = await paymentCollections.insertOne(paymentData)

  const data = await db.collection("bookings").updateMany(
    { email, status: "pending" }, 
    { $set: { status: "confirmed" } }
  ); 
  const length = await paymentData?.itemsIds?.length
  const updateUser = await db.collection("users").updateOne(
    { email },
    {
      $inc: { destinationCovered: length || 0 },
      $set: { destinationCovered: length || 0 } // Ensure it's set to 0 if not defined
    },
    { upsert: true } // Create the document if not found
  );
  console.log(updateUser,"hello")

  return NextResponse.json({result,data,updateUser})
} catch (error) {
   return NextResponse.json({error})
  
 }
}
