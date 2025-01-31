const { connectDB } = require("@/lib/connectDB")
const { NextResponse } = require("next/server")

const GET =async()=>{
  try {
    const db = await connectDB()
    const reviews = await db.collection("reviews").find().toArray()
    return NextResponse.json({reviews})
  } catch (error) {
    console.log(error)
    return NextResponse.json({})
    
  }
}

const data =[
  {
    "user": "John Smith",
    "email": "smith@email.com",
    "date": "2025-01-10T14:32:15.123Z",
    "image": "https://randomuser.me/api/portraits/men/19.jpg",
    "description": "Travel Vista made my trip planning effortless! The interactive map was super helpful."
  },
  {
    "user": "Michael Johnson",
    "email": "michael@email.com",
    "date": "2025-02-05T09:12:48.678Z",
    "image": "https://randomuser.me/api/portraits/men/45.jpg",
    "description": "I was impressed with the seamless booking process and personalized recommendations. Travel Vista helped me find unique spots I wouldn't have discovered otherwise. Will definitely use it again!"
  },
  {
    "user": "David Martinez",
    "email": "david@email.com",
    "date": "2025-01-22T18:45:32.987Z",
    "image": "https://randomuser.me/api/portraits/men/50.jpg",
    "description": "Easy to use and great travel deals!"
  },
  {
    "user": "James Anderson",
    "email": "james@email.com",
    "date": "2025-01-18T07:59:11.543Z",
    "image": "https://randomuser.me/api/portraits/men/27.jpg",
    "description": "The real-time updates on destinations were a game-changer. I found hidden gems that made my trip unforgettable. The UI is also very intuitive, making the experience smooth from start to finish."
  },
  {
    "user": "Robert Wilson",
    "email": "robert@email.com",
    "date": "2025-02-01T16:20:55.321Z",
    "image": "https://randomuser.me/api/portraits/men/33.jpg",
    "description": "Helpful reviews and great UI!"
  },
  {
    "user": "Daniel Lee",
    "email": "daniel@email.com",
    "date": "2025-01-25T11:38:22.765Z",
    "image": "https://randomuser.me/api/portraits/men/21.jpg",
    "description": "I loved how detailed the travel guides were. They provided everything I needed, from local food recommendations to hidden hiking trails. Highly recommend Travel Vista!"
  },
  {
    "user": "Christopher Evans",
    "email": "chris@email.com",
    "date": "2025-01-12T22:05:40.654Z",
    "image": "https://randomuser.me/api/portraits/men/9.jpg",
    "description": "Great travel recommendations!"
  },
  {
    "user": "William Taylor",
    "email": "william@email.com",
    "date": "2025-02-03T13:47:29.876Z",
    "image": "https://randomuser.me/api/portraits/men/12.jpg",
    "description": "The platform is well-designed and easy to navigate. I planned my entire trip with Travel Vista, and everything went smoothly. It’s now my go-to for travel planning!"
  }
]

