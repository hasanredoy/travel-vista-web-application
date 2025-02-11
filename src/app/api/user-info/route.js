import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const { email: emailFromClient } = await request.json();


    const db = await connectDB();
    const userCollection = db.collection("users");
    const blogsCollection = db.collection("blogs");
    const reviewsCollection = db.collection("reviews");
// find user 
const findUser = await userCollection.findOne({email:emailFromClient?.email})

// find user blogs 
    const findUserBlogs = await blogsCollection
      .find({ email: emailFromClient })
      .toArray();
      // find user review 
    const findUserReviews = await reviewsCollection
      .find({ email: emailFromClient })
      .toArray();
// get total reactions 
    const totalReactions = await blogsCollection.aggregate([
      { $match: { email: emailFromClient } },
      { $group: { _id: null, totalReactions: { $sum: "$react" } } }
    ]).toArray();

    const reactionsGained = totalReactions.length > 0 ? totalReactions[0].totalReactions : 0;

    const getRandomInteger = () => {
      const min = 1;
      const max = 15;
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const data = {
      blogsCount: findUserBlogs.length,
      reviewsCount: findUserReviews.length,
      reactionsGained,
      destinationCovered: getRandomInteger(),
      bio:findUser?.bio?findUser?.bio:"Travel enthusiast and blogger who loves exploring new destinations and sharing experiences.",
    };
  // console.log(data)
    return NextResponse.json({ data });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
};

