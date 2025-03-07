import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server"

export const  GET=async(request,{params})=>{
 
  try {
    const id = params?.id
    console.log(id,'server') 
    const db = await connectDB()
    const userCollection = db.collection("users");
    const blogsCollection = db.collection("blogs");
    const reviewsCollection = db.collection("reviews");
    // find user
    const findUser = await blogsCollection.findOne({ _id: new ObjectId(id) });
    const findUserFromUserCollection=await userCollection.findOne({email:findUser.email})
    // find user blogs
    const findUserBlogs = await blogsCollection
      .find({ email: findUser?.email })
      .toArray();
    // find user review
    const findUserReviews = await reviewsCollection
      .find({ email: findUser?.email })
      .toArray();
    // get total reactions
    const totalReactions = await blogsCollection
      .aggregate([
        { $match: { email: findUser?.email } },
        { $group: { _id: null, totalReactions: { $sum: "$react" } } },
      ])
      .toArray();

    const reactionsGained =
      totalReactions.length > 0 ? totalReactions[0].totalReactions : 0;
      const userStats = {
        name:findUser?.user,
        image:findUser?.image,
        blog:findUserBlogs?.length||0,
        reviews:findUserReviews?.length||0,
        reactions:reactionsGained||0,
        destinations:findUserFromUserCollection?.destinationCovered||0,
        blogs:findUserBlogs||[{
          id: 1,
          title: "Exploring the Alps",
          description: "An unforgettable journey through the Swiss Alps.",
          image: "https://via.placeholder.com/300",
        },
        {
          id: 2,
          title: "A Week in Bali",
          description: "The best beaches and cultural experiences in Bali.",
          image: "https://via.placeholder.com/300",
        },]

      }
    return NextResponse.json({data:userStats})
  } catch (error) {
    return NextResponse.json({error})
  }
}