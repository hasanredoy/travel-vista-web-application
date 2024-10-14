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
    "image": "https://randomuser.me/api/portraits/men/19.jpg",
    "location": "Los Angeles, USA",
    "testimonial": "Travel Vista made my adventure trip so smooth and hassle-free. The platform is user-friendly, and I got excellent support from their team.",
    "rating": 5,
    "date": "2024-09-10"
  },
  {
    "name": "Ahmed El-Sayed",
    "image": "https://randomuser.me/api/portraits/men/32.jpg",
    "location": "Cairo, Egypt",
    "testimonial": "I booked my mountain escape with Travel Vista and had an amazing experience. The variety of travel options and the ease of booking was exceptional.",
    "rating": 4,
    "date": "2024-08-25"
  },
  {
    "name": "Daniel Kim",
    "image": "https://randomuser.me/api/portraits/men/33.jpg",
    "location": "Seoul, South Korea",
    "testimonial": "The beach holiday package I found on Travel Vista was perfect for my family. The platform made everything easy from start to finish.",
    "rating": 5,
    "date": "2024-09-02"
  },
  {
    "name": "Carlos Rivera",
    "image": "https://randomuser.me/api/portraits/men/40.jpg",
    "location": "Madrid, Spain",
    "testimonial": "I had a great experience using Travel Vista to plan my cruise. The site has a lot of options, and I found the perfect trip for me.",
    "rating": 5,
    "date": "2024-08-18"
  },
  {
    "name": "Mustafa Khan",
    "image": "https://randomuser.me/api/portraits/men/30.jpg",
    "location": "Istanbul, Turkey",
    "testimonial": "Travel Vista’s wildlife safari recommendations were fantastic. I had a memorable experience and will definitely use the service again.",
    "rating": 4,
    "date": "2024-09-15"
  }
]
