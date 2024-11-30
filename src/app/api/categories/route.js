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
    "category": "Adventure",
    "description": "Explore thrilling destinations with activities like hiking, rafting, and mountain climbing for the ultimate adrenaline rush.",
    "image": "https://i.postimg.cc/MHVwV89P/route-1.png"
  },
  {
    "category": "Beach_Holidays",
    "description": "Relax on stunning beaches with crystal-clear waters, perfect sunsets, and luxurious resorts for a tropical getaway.",
    "image": "https://i.postimg.cc/28bXSw16/sun-umbrella-1.png"
  },
  {
    "category": "Mountain_Escapes",
    "description": "Discover breathtaking mountain ranges, enjoy serene landscapes, and embark on challenging treks amidst nature's beauty.",
    "image": "https://i.postimg.cc/sgZFbzYT/mountain-2.png"
  },
  {
    "category": "Wildlife_Safaris",
    "description": "Embark on thrilling safaris to witness wildlife in their natural habitats, from African savannas to Amazon rainforests.",
    "image": "https://i.postimg.cc/fb30NLzS/wildlife-1.png"
  },
  {
    "category": "City_Escapes",
    "description": "Set sail on luxurious cruises to explore multiple destinations, enjoy onboard entertainment, and experience the open sea.",
    "image": "https://i.postimg.cc/DwCpLTpV/skyline.png"
  }
]


// image links 
//https://i.postimg.cc/dtL2grXr/map.png
// https://i.postimg.cc/pLLgwGvk/summer-holidays.png
// https://i.postimg.cc/63XzXqRw/mountain.png
// https://i.postimg.cc/J0g1sfRr/tree.png
// https://i.postimg.cc/Y24NsQTg/boat.png 

