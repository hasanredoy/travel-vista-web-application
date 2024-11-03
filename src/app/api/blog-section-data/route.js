import { NextResponse } from "next/server"

export const GET = async()=>{
  try {
  return NextResponse.json({data})
} catch (error) {
  console.log(error);
    return NextResponse.json({})
    
  }
}
const data =[
  {
    "user": "John Smith",
    "date": "2024-10-10",
    "image": "https://randomuser.me/api/portraits/men/19.jpg",
    "title": "Adventure Trip Made Easy",
    "experience": "Travel Vista made my adventure trip so smooth and hassle-free. The platform is user-friendly, and I got excellent support from their team. The itinerary was well-organized, allowing me to make the most of my time exploring. I recommend their service to anyone who values a seamless travel experience and top-notch customer support. Make sure to check out their tips on local dining—it enhanced my trip even more!",
    "rating": 5,
    "location": "Los Angeles, USA"
  },
  {
    "user": "Ahmed El-Sayed",
    "date": "2024-08-25",
    "image": "https://randomuser.me/api/portraits/men/32.jpg",
    "title": "Mountain Escape Experience",
    "experience": "I booked my mountain escape with Travel Vista and had an amazing experience. The variety of travel options and the ease of booking were exceptional. The guided tours were informative, and I felt completely safe throughout the adventure. If you're looking for a well-planned mountain getaway, Travel Vista is the way to go. Don’t miss their local guides' insider tips—it made my trek even more memorable.",
    "rating": 4,
    "location": "Cairo, Egypt"
  },
  {
    "user": "Daniel Kim",
    "date": "2024-09-02",
    "image": "https://randomuser.me/api/portraits/men/33.jpg",
    "title": "Perfect Beach Holiday",
    "experience": "The beach holiday package I found on Travel Vista was perfect for my family. The platform made everything easy from start to finish, and the resort recommendations were fantastic. The staff were responsive and ready to answer any questions. I’d suggest checking out their blog for packing tips and activity suggestions—it made planning stress-free and fun.",
    "rating": 5,
    "location": "Seoul, South Korea"
  },
  {
    "user": "Carlos Rivera",
    "date": "2024-08-18",
    "image": "https://randomuser.me/api/portraits/men/40.jpg",
    "title": "Cruise Planning with Ease",
    "experience": "I had a great experience using Travel Vista to plan my cruise. The site has a lot of options, and I found the perfect trip for me. What stood out was their attention to detail—from tips on cabin selection to must-try excursions, it was all covered. Highly recommend their service if you’re planning a cruise. Their user-friendly interface makes it easy to find exactly what you need.",
    "rating": 5,
    "location": "Madrid, Spain"
  },
  {
    "user": "Mustafa Khan",
    "date": "2024-09-15",
    "image": "https://randomuser.me/api/portraits/men/30.jpg",
    "title": "Memorable Wildlife Safari",
    "experience": "Travel Vista’s wildlife safari recommendations were fantastic. I had a memorable experience seeing animals in their natural habitat. The itinerary included some exclusive spots I would never have discovered on my own. The guides were knowledgeable and passionate about wildlife. For anyone looking to experience nature firsthand, I can’t recommend it enough. Be sure to read their travel prep guide—it helped me get the most out of my trip.",
    "rating": 4,
    "location": "Istanbul, Turkey"
  }
]
