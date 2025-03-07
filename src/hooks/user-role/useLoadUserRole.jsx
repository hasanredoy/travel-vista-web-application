"use client"

import axios from "axios"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"

const useLoadUserRole = () => {
  const [role,setRole] = useState("user")
  const {user} = useSession()?.data||{}
  useEffect(()=>{
    
    axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user-role?email=${user?.email}`)
    .then(res=>{
      setRole(res?.data?.user_role)
    })
  },[user])
  return role||""
}

export default useLoadUserRole
