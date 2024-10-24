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
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/566px-Emirates_logo.svg.png",
    "website": "https://www.emirates.com"
  },
  {
    "name": "Qatar Airways",
    "logo": "https://seeklogo.com/images/Q/qatar-airways-logo-E096F45AE3-seeklogo.com.png",
    "website": "https://www.qatarairways.com"
  },
  {
    "name": "Hilton Hotels",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0CEFVZ_gTqgyHkDz3_TMh5X61ReKA54ijIg&s",
    "website": "https://www.hilton.com"
  },
  
    {
      "name": "Expedia",
      "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqxmFPTzVUjpMUYZRW-h3fGNlH31NZvOtlPg&s",
      "website": "https://www.expedia.com"
    },
    {
      "name": "Marriott",
      "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGSPTP6AD2Jq2f7xYl29OSShxfNSSbLWk3yg&s",
      "website": "https://www.marriott.com"
    },
    {
      "name": "Turo",
      "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUjILdSHoTMiW9gUsWFFOq3yIS_ToishBdmQ&s",
      "website": "https://www.turo.com"
    }
  
  
]
