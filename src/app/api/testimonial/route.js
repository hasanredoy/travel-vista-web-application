import { NextResponse } from "next/server"

export const GET = async()=>{
  try {
  return NextResponse.json({data})
} catch (error) {
  console.log(error);
    return NextResponse.json({})
    
  }
}

const data = [
  {
    "name": "John Smith",
    "image": "https://randomuser.me/api/portraits/men/20.jpg",
    "location": "Los Angeles, USA",
    "date":"09/10/2024",
    "testimonial": "Travel Vista made my adventure trip so smooth and hassle-free. The platform is user-friendly, and I got excellent support from their team.",
    "rating": 5
  },
  {
    "name": "Ahmed El-Sayed",
    "image": "https://randomuser.me/api/portraits/men/21.jpg",
    "location": "Cairo, Egypt",
    "testimonial": "I booked my mountain escape with Travel Vista and had an amazing experience. The variety of travel options and the ease of booking was exceptional.",
    "rating": 4
  },
  {
    "name": "Daniel Kim",
    "image": "https://randomuser.me/api/portraits/men/23.jpg",
    "location": "Seoul, South Korea",
    "testimonial": "The beach holiday package I found on Travel Vista was perfect for my family. The platform made everything easy from start to finish.",
    "rating": 5
  },
  {
    "name": "Carlos Rivera",
    "image": "https://randomuser.me/api/portraits/men/24.jpg",
    "location": "Madrid, Spain",
    "testimonial": "I had a great experience using Travel Vista to plan my cruise. The site has a lot of options, and I found the perfect trip for me.",
    "rating": 5
  },
  {
    "name": "Mustafa Khan",
    "image": "https://randomuser.me/api/portraits/men/25.jpg",
    "location": "Istanbul, Turkey",
    "testimonial": "Travel Vista’s wildlife safari recommendations were fantastic. I had a memorable experience and will definitely use the service again.",
    "rating": 4
  }
]
