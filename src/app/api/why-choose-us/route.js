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
    "title": "Curated Travel Experiences",
    "description": "At Travel Vista, we offer personalized travel packages that cater to every kind of traveler, ensuring unforgettable experiences tailored to your preferences.",
    "icon": "https://i.postimg.cc/Dy7vRNJz/experience.png"
  },
  {
    "title": "Expert Guidance & Support",
    "description": "Our team of travel experts is available 24/7 to assist you with recommendations, bookings, and support, ensuring a smooth and stress-free journey.",
    "icon": "https://i.postimg.cc/d3xsKsTc/expert-advice.png"
  },
  {
    "title": "Best Price Guarantee",
    "description": "We work directly with local partners and providers to offer you the best prices without compromising on quality. Enjoy premium travel experiences at unbeatable rates.",
    "icon": "https://i.postimg.cc/d3xsKsTc/expert-advice.png"
  }
]
