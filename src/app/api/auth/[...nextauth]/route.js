import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
const bcrypt = require("bcryptjs");
import GoogleProvider from "next-auth/providers/google";


const handler = NextAuth({
  secret: process.env.SECRET_TOKEN,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      // add login method
      credentials: {
        email: {},
        password: {},
      },
      // validate user
      async authorize(credentials) {
        // //console.log('hello');
        const { email, password } = credentials;
        // //console.log({email,password});
        // check if not email or password return null
        if (!email || !password) {
          return null;
        }
        // connect db
        const db = await connectDB();
        // get users collection
        const usersCollection = await db.collection("users");
        // get current user
        const currentUser = await usersCollection.findOne({ email });
        // //console.log({currentUser});
        //return null if not user
        if (!currentUser) {
          return null;
        }
        // match password
        const matchedPass = bcrypt.compareSync(password, currentUser?.password);
        //return null if pass didn't match
        if (!matchedPass) {
          return null;
        }
        // if everything ok return current user
        return currentUser;
      },
    }),
    GoogleProvider({
      clientId:process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret:process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    async signIn({user,account}){
      if (account.provider==='google') {
        const {name,image,email} = user;
        console.log(user,'from auth server')
        const db = await connectDB()
        const userData={
          name,
          email,
          registerDate: new Date(),
          type:'user',
          image,
          bio:"Travel enthusiast and blogger who loves exploring new destinations and sharing experiences."
        }
        const findUser = await db.collection("users").findOne({email})
        if(!findUser){
          const postUser = await db.collection("users").insertOne(userData)
          console.log(postUser)

        }
        return true


      } else {
        return true
      }
    }
  },
  pages: {
    signIn: "/login",
  },
});
export { handler as GET, handler as POST };
