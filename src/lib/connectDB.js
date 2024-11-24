import { MongoClient, ServerApiVersion } from "mongodb";

let db;
export const connectDB = async ()=>{
  if(db) return db;
  try {
    // get uri from env file 
  const uri = process.env.NEXT_PUBLIC_MONGO_URI
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  db=client.db('Travel-Vista')
  return db;
  } catch (error) {
    console.log(error)
  }
}