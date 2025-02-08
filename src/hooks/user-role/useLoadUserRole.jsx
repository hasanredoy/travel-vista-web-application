"use client"

import axios from "axios"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"

const useLoadUserRole = () => {
  const [role,setRole] = useState("")
  const {user} = useSession()?.data||{}
  useEffect(()=>{
    const email ={email:user?.email}
    axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user-role`,email)
    .then(res=>{
      setRole(res?.data?.user_role)
    })
  },[user])
  return role||""
}

export default useLoadUserRole
