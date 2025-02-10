"use client";
import Link from "next/link";

import { ImHome } from "react-icons/im";
import { MdLogin, MdLogout, MdOutlineTravelExplore, MdReviews } from "react-icons/md";
import { MdAddHomeWork } from "react-icons/md";
import { MdContactSupport } from "react-icons/md";
import { usePathname } from "next/navigation";
import trip from "../../../public/assets/trip.gif";
import Image from "next/image";
import logo from "../../../public/assets/logo.png";
import { RiMenuUnfold3Fill } from "react-icons/ri";
import { LuLogIn } from "react-icons/lu";
import swal from 'sweetalert'
import { GoDotFill } from "react-icons/go";
import { TbMessageChatbot } from "react-icons/tb";
import { signOut, useSession } from "next-auth/react";
import { FiLoader } from "react-icons/fi";
import { useState } from "react";
import { RxDashboard } from "react-icons/rx";




const Navbar = () => {

  // state for dashboard dropdown
  const [showDropdown , setShowDropdown] = useState(false) 

  //  get pathname
  const path = usePathname();
  const session = useSession();
  // console.log(session);
// logout handler 
const handleLogout=()=>{
  swal({
    title: "Are you sure?",
    text: "You wanna Logout!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      signOut()
      swal("Logged out successfully!", {
        icon: "success",
      });
    }
  });
}

  // nav links
  const navLinks = (
    <>
      <Link
        href={"/"}
        className={`text-sm md:text-base font-bold flex gap-2 items-center hover:text-sky-500     hover:bg-white hover:max-w-40 hover:px-5 hover:rounded-md transition-all  ${
          path == "/" && "text-sky-500 bg-white  max-w-40 px-5 rounded-md"
        } `}
      >
        <ImHome className="text-xl"></ImHome> Home{" "}
        {path == "/" && (
          <GoDotFill className=" text-green-400 font-bold "></GoDotFill>
        )}
      </Link>
      <Link
        href={"/tours"}
        className={`text-sm md:text-base font-bold flex gap-2 items-center hover:text-sky-500  hover:bg-white hover:max-w-40 hover:px-5 hover:rounded-md  transition-all  ${
          path == "/tours" && "text-sky-500 bg-white  max-w-40 px-5 rounded-md"
        }`}
      >
        <MdOutlineTravelExplore className="text-xl"></MdOutlineTravelExplore>{" "}
        Tours{" "}
        {path == "/tours" && (
          <GoDotFill className=" text-green-400 font-bold "></GoDotFill>
        )}
      </Link>
      <Link
        href={"/start_hosting"}
        className={`text-sm md:text-base font-bold flex gap-2 items-center hover:text-sky-500  hover:bg-white hover:max-w-40 hover:px-2 hover:rounded-md transition-all  ${
          path == "/start_hosting" &&
          "text-sky-500 bg-white  max-w-40 px-2 rounded-md"
        }`}
      >
        <MdAddHomeWork className="text-xl"></MdAddHomeWork> Start Hosting{" "}
        {path == "/start_hosting" && (
          <GoDotFill className=" text-green-400 font-bold "></GoDotFill>
        )}
      </Link>
      <Link
        href={"/blogs"}
        className={`text-sm md:text-base font-bold flex gap-2 items-center hover:text-sky-500  hover:bg-white hover:max-w-40 hover:px-5 hover:rounded-md transition-all  ${
          path == "/blogs" &&
          "text-sky-500 bg-white  max-w-40 px-5 rounded-md"
        }`}
      >
        <TbMessageChatbot className="text-xl"></TbMessageChatbot> Blogs{" "}
        {path == "/blogs" && (
          <GoDotFill className=" text-green-400 font-bold "></GoDotFill>
        )}
      </Link>
      <Link
        href={"/reviews"}
        className={`text-sm md:text-base font-bold flex gap-2 items-center hover:text-sky-500  hover:bg-white hover:max-w-40 hover:px-5 hover:rounded-md transition-all  ${
          path == "/reviews" &&
          "text-sky-500 bg-white  max-w-40 px-5 rounded-md"
        }`}
      >
        <MdReviews className="text-xl"></MdReviews> Reviews{" "}
        {path == "/reviews" && (
          <GoDotFill className=" text-green-400 font-bold "></GoDotFill>
        )}
      </Link>
      <Link
        href={"/contact_us"}
        className={`text-sm md:text-base font-bold flex gap-2 items-center hover:text-sky-500  hover:bg-white hover:max-w-40 hover:px-2 hover:rounded-md transition-all  ${
          path == "/contact_us" &&
          "text-sky-500 bg-white  max-w-40 px-2 rounded-md"
        }`}
      >
        <MdContactSupport className="text-xl"></MdContactSupport> Contact us{" "}
        {path == "/contact_us" && (
          <GoDotFill className=" text-green-400 font-bold "></GoDotFill>
        )}
      </Link>
      <Link
        href={"/login"}
        className={`text-sm md:text-base font-bold flex gap-2 items-center hover:text-sky-500  hover:bg-white hover:max-w-40 hover:px-5 hover:rounded-md transition-all  ${
          path == "/login" && "text-sky-500 bg-white  max-w-40 px-5 rounded-md"
        }`}
      >
        <MdLogin className="text-xl"></MdLogin> Login{" "}
        {path == "/login" && (
          <GoDotFill className=" text-green-400 font-bold "></GoDotFill>
        )}
      </Link>
    </>
  );
  if(path.includes("dashboard")){
    return <div></div>
  }
  return (
    <nav className="shadow-lg  nav relative ">
      <section className="navbar w-[96%] mx-auto lg:w-[85%]">
        <div className="navbar-start">
          <section className="dropdown">
            <div
              tabIndex={0}
              role="button"
              title="click outside to close"
              className="btn btn-ghost btn-circle"
            >
              <RiMenuUnfold3Fill className="text-xl md:text-2xl lg:text-3xl"></RiMenuUnfold3Fill>
            </div>
            <ul
              tabIndex={0}
              className=" h-full dropdown-content dropDown bg-[#daf8f7e8] shadow-lg shadow-blue-200 bg-opacity-90   w-[230px] md:w-[240px] lg:w-[320px]    min-h-screen  z-[50] mt-2 absolute -left-5 md:-left-14 lg:-left-32 flex flex-col gap-3 pl-5 md:pl-16 lg:pl-20 pt-5 "
            >
              {navLinks}
              <div>
                <Image
                  src={trip}
                  alt="trip "
                  width={60}
                  height={60}
                  className=" absolute  w-10 h-10  md:w-16 md:h-16 top-0 right-0"
                ></Image>
              </div>
            </ul>
          </section>
        </div>
        <div className="navbar-center">
          <Link href={"/"}>
            <Image
              src={logo}
              className=" w-[120px] md:w-[180px] lg:w-[250px]"
              width={200}
              height={50}
              alt="logo"
            ></Image>
          </Link>
        </div>
        <div className="navbar-end relative">
            <div>
            {/* login and logout button  */}
            {session?.status === "loading" && <FiLoader className=" animate-spin text-2xl font-bold text-black"></FiLoader>}
            {session?.status === "unauthenticated" && (
              <Link className="hidden md:block" href={"/login"}>
                <button className="  btn-primary flex justify-center items-center gap-2">
                  Login<LuLogIn className=" text-base  md:text-xl"></LuLogIn>{" "}
                </button>
              </Link>
            )}
           
          </div>
          {/* user image  */}
          <button onClick={()=>setShowDropdown(!showDropdown)} className="ml-5">
            {session?.data?.user?.image&&<Image title={session?.data?.user?.name} src={session?.data?.user?.image} alt={session?.data?.user?.name} height={50} width={50} className="rounded-full  md:block border p-0.5 border-[#6bfaf3]" ></Image>}
          </button>
        {showDropdown&&<div onMouseLeave={()=>setShowDropdown(!showDropdown)} className=" flex flex-col gap-3 p-4 absolute top-14 right-0 z-50 bg-gray-100 border shadow-lg rounded-md justify-center  ">
              <Link className=" text-center flex justify-center items-center gap-2 py-2 px-3 border bg-gray-300 text-black rounded-md" href={'/dashboard'}>Dashboard <RxDashboard></RxDashboard></Link>
              <button className="btn-primary flex justify-center items-center gap-2" onClick={handleLogout}>
               <span> Logout</span> <MdLogout className=" text-base  md:text-xl"></MdLogout>
              </button>
          </div>}
    
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
