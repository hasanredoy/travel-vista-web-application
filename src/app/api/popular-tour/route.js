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
    "title": "Cappadocia Hot Air Balloon Tour",
    "image": "https://images.pexels.com/photos/14527219/pexels-photo-14527219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "country": "Turkey",
    "category": "Adventure"
  },
  {
    "title": "Safari in Serengeti",
    "image": "https://images.unsplash.com/photo-1516496798850-70e120364fe4?q=80&w=1571&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "country": "Tanzania",
    "category": "Wildlife"
  },
  {
    "title": "The Oslo region",
    "image": "https://images.pexels.com/photos/4711509/pexels-photo-4711509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "country": "Norway",
    "category": "Nature"
  },
  {
    "title": "Petra Exploration",
    "image": "https://images.unsplash.com/photo-1551171129-8ce1ebb911b3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "country": "Jordan",
    "category": "Historical"
  },
  {
    "title": "Northern Lights Cruise",
    "image": "https://img.freepik.com/free-photo/aurora-borealis-landscape-sea_23-2151387602.jpg?t=st=1726482713~exp=1726486313~hmac=2d09646abf16ee442807ba8efd64c5075032d5144567f9e9605a9acbef242cb4&w=826",
    "country": "Iceland",
    "category": "Cruise"
  },
  {
    "title": "Amazon Rainforest Expedition",
    "image": "https://images.pexels.com/photos/25929086/pexels-photo-25929086/free-photo-of-sloth-hanging-on-a-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "country": "Brazil",
    "category": "Eco-Tourism"
  },
  {
    "title": "Pyramids of Giza Tour",
    "image": "https://images.pexels.com/photos/16494118/pexels-photo-16494118/free-photo-of-pyramids-of-the-giza-necropolis.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "country": "Egypt",
    "category": "Historical"
  },
  {
    "title": "Alps Ski Adventure",
    "image": "https://img.freepik.com/free-photo/vertical-shot-magnificent-mountain-peaks-covered-with-snow_181624-6996.jpg?t=st=1726483151~exp=1726486751~hmac=329f45b8d31ab2d913d8f47805b1c14ceb857ba44d315bc9151b17c07e7d3bc8&w=360",
    "country": "Switzerland",
    "category": "Adventure"
  },
  {
    "title": "Galápagos Islands Wildlife Tour",
    "image": "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "country": "Ecuador",
    "category": "Wildlife"
  },
  {
    "title": "Borneo Rainforest Adventure",
    "image": "https://images.unsplash.com/photo-1686554179297-acad205c7bce?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "country": "Malaysia",
    "category": "Eco-Tourism"
  }
]
