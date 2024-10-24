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
    "name": "Emirates",
    "logo": "https://example.com/logos/emirates.png",
    "website": "https://www.emirates.com"
  },
  {
    "name": "Qatar Airways",
    "logo": "https://example.com/logos/qatar-airways.png",
    "website": "https://www.qatarairways.com"
  },
  {
    "name": "Hilton Hotels",
    "logo": "https://example.com/logos/hilton-hotels.png",
    "website": "https://www.hilton.com"
  },
  {
    "name": "Expedia",
    "logo": "https://example.com/logos/expedia.png",
    "website": "https://www.expedia.com"
  },
  {
    "name": "Marriott",
    "logo": "https://example.com/logos/marriott.png",
    "website": "https://www.marriott.com"
  },
  {
    "name": "Booking.com",
    "logo": "https://example.com/logos/booking.png",
    "website": "https://www.booking.com"
  },
  {
    "name": "Airbnb",
    "logo": "https://example.com/logos/airbnb.png",
    "website": "https://www.airbnb.com"
  },
  {
    "name": "TripAdvisor",
    "logo": "https://example.com/logos/tripadvisor.png",
    "website": "https://www.tripadvisor.com"
  },
  {
    "name": "Kayak",
    "logo": "https://example.com/logos/kayak.png",
    "website": "https://www.kayak.com"
  },
  {
    "name": "Turo",
    "logo": "https://example.com/logos/turo.png",
    "website": "https://www.turo.com"
  }
]
