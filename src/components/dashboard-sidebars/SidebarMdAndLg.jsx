"use client"

import useLoadUserRole from "@/hooks/user-role/useLoadUserRole"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { FaUser } from "react-icons/fa"
import { GoDotFill } from "react-icons/go";


const SidebarMdAndLg = () => {
   // get pathname 
  const pathname = usePathname()
  // get user role 
  const role = useLoadUserRole()

  return (
    <section className=" min-h-dvh bg-gradient-to-r from-white via-[#b0fbfd] to-white p-4 flex items-center flex-col gap-3 
    shadow-[rgba(2,166,172,0.5)_2px_0px_0px_0px]">

      {/* links for user  */}
      {role=="user"&&<div className=" flex gap-3 flex-col ">
            <Link href={'/dashboard'} className={`flex gap-2 items-center font-semibold  hover:bg-sky-50   hover:rounded-lg hover:text-black relative px-24 py-1  ${pathname=="/dashboard"&&" bg-sky-50 px-10 py-1 rounded-lg text-black "}`}>Profile <FaUser></FaUser>
            {pathname=="/dashboard"&&<span className="text-green-500 absolute -right-3 -top-1"><GoDotFill></GoDotFill></span>}
            </Link>
            <Link href={'/dashboard'} className={`flex gap-2 items-center font-semibold  hover:bg-sky-50   hover:rounded-lg hover:text-black relative px-24 py-1  ${pathname=="/dashboard/h"&&" bg-sky-50 px-5 py-1 rounded-md text-black "}`}>Profile <FaUser></FaUser>
            {/* {pathname=="/dashboard"&&<span className="text-green-500 absolute -right-3 -top-1"><GoDotFill></GoDotFill></span>} */}
            </Link>
            <Link href={'/dashboard'} className={`flex gap-2 items-center font-semibold  hover:bg-sky-50   hover:rounded-lg  hover:text-black relative px-24 py-1  ${pathname=="/dashboard/mk"&&" bg-sky-50 px-5 py-1 rounded-md text-black "}`}>Profile <FaUser></FaUser>
            {/* {pathname=="/dashboard"&&<span className="text-green-500 absolute -right-3 -top-1"><GoDotFill></GoDotFill></span>} */}
            </Link>
        </div>}


      {/* links for host  */}
      {role=="host"&&<div>
            <Link href={'/dashboard'} className=" flex gap-2 items-center font-semibold ">Profile <FaUser></FaUser></Link>
        
        </div>}


      {/* links for admin  */}
      {role=="admin"&&<div>
            <Link href={'/dashboard'} className=" flex gap-2 items-center font-semibold ">Profile <FaUser></FaUser></Link>
        
        </div>}

    </section>
  )
}

export default SidebarMdAndLg
