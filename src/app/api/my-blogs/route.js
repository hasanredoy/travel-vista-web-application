import { NextResponse } from "next/server";

export const GET = async (request) => {
  const {email:userEmail} = await request.json()

  try {

    const db = await connectDB();
    const blogsCollection = await db.collection("blogs");
    const BlogsData = await blogsCollection.find({email:userEmail}).toArray();
    // console.log(BlogsData)
    return NextResponse.json({ data: BlogsData });
  } catch (error) {
    console.log(error);
    return NextResponse.json({});
  }
};