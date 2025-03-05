"use client";

import useLoadUserRole from "@/hooks/user-role/useLoadUserRole";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUser, FaCalendarCheck, FaUsers, FaUserTie } from "react-icons/fa";
import {
  MdPayment,
  MdPlaylistAddCircle,
  MdPlaylistAddCheckCircle,
  MdOutlineTravelExplore,
  MdAddHomeWork,
  MdReviews,
  MdContactSupport,
  MdLogout,
} from "react-icons/md";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { ImHome } from "react-icons/im";
import { TbMessageChatbot } from "react-icons/tb";
import { signOut, useSession } from "next-auth/react";
import swal from "sweetalert";
import Image from "next/image";

const SidebarLg = () => {
  const { user } = useSession()?.data || {};

  // get pathname
  const pathname = usePathname();
  // get user role
  const role = useLoadUserRole();

  // logout handler
  const handleLogout = () => {
    swal({
      title: "Are you sure?",
      text: "You wanna Logout!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        signOut();
        swal("Logged out successfully!", {
          icon: "success",
        });
      }
    });
  };

  return (
    <section
      className=" min-h-dvh bg-gradient-to-r from-white via-[#b8f3f5] to-white py-4 flex items-center flex-col gap-3 justify-between
      h-full
      drop-shadow-[3px_0_1px_rgba(0,0,0,0.3)] 
      "
    >
      {/* dynamic links div  */}
      <div className=" w-full min-w-full">
        {/* user info sect  */}
        <div className="flex items-center space-x-4  justify-center w-full">
          <Image
            src={user?.image||"https://randomuser.me/api/portraits/men/1.jpg"}
            width={40}
            title={user?.name}
            height={40}
            alt=""
            className="w-10 h-10 rounded-full dark:bg-gray-500"
          />
          {/* user name and details btn container div  */}
          <div className=" ">
            <div>
              <h3 className="text-base font-medium">{user?.name}</h3>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        {/* links for user  */}
        {role == "user" && (
          <div className=" flex gap-3 flex-col w-full min-w-full">
            {/* profile  */}
            <Link
              href={"/dashboard"}
              className={`flex gap-2 items-center pl-[80px]  font-medium  hover:bg-gradient-to-r hover:from-[#b8f3f5] hover:via-white hover:to-[#b8f3f5] w-full min-w-full  hover:text-black relative  py-1  
            ${
              pathname == "/dashboard" &&
              " bg-gradient-to-l from-[#b8f3f5] via-white to-[#b8f3f5]   w-full min-w-full py-1 text-black "
            }`}
            >
              Profile
              <FaUser></FaUser>
            </Link>
            {/* blogs  */}
            <Link
              href={"/dashboard/my_blogs"}
              className={`flex gap-2 items-center pl-[80px]  font-medium  hover:bg-gradient-to-r hover:from-[#b8f3f5] hover:via-white hover:to-[#b8f3f5] w-full min-w-full  hover:text-black relative  py-1  
            ${
              pathname == "/dashboard/my_blogs" &&
              " bg-gradient-to-l from-[#b8f3f5] via-white to-[#b8f3f5]   w-full min-w-full py-1 text-black "
            }`}
            >
              My Blogs
              <TbMessageChatbot className="text-2xl"></TbMessageChatbot>
            </Link>
            {/* bookings  */}
            <Link
              href={"/dashboard/my_bookings"}
              className={`flex gap-2 items-center pl-[80px]  font-medium  hover:bg-gradient-to-r hover:from-[#b8f3f5] hover:via-white hover:to-[#b8f3f5] w-full min-w-full  hover:text-black relative  py-1  
            ${
              pathname == "/dashboard/my_bookings" &&
              " bg-gradient-to-l from-[#b8f3f5] via-white to-[#b8f3f5]   w-full min-w-full py-1 text-black "
            }`}
            >
              My Bookings
              <FaCalendarCheck className=" text-xl"></FaCalendarCheck>
            </Link>

            {/* payment history  */}
            <Link
              href={"/dashboard/payment_history"}
              className={`flex gap-2 items-center pl-[80px]  font-medium  hover:bg-gradient-to-r hover:from-[#b8f3f5] hover:via-white hover:to-[#b8f3f5] w-full min-w-full  hover:text-black relative  py-1  
            ${
              pathname == "/dashboard/payment_history" &&
              " bg-gradient-to-l from-[#b8f3f5] via-white to-[#b8f3f5]   w-full min-w-full py-1 text-black "
            }`}
            >
              Payment History
              <MdPayment className=" text-2xl"></MdPayment>
            </Link>
          </div>
        )}

        {/* links for host  */}
        {role == "host" && (
          <div className=" flex gap-3 flex-col w-full min-w-full">
            {/* profile  */}
            <Link
              href={"/dashboard"}
              className={`flex gap-2 items-center pl-[80px]  font-medium  hover:bg-gradient-to-r hover:from-[#b8f3f5] hover:via-white hover:to-[#b8f3f5] w-full min-w-full  hover:text-black relative  py-1  
         ${
           pathname == "/dashboard" &&
           " bg-gradient-to-l from-[#b8f3f5] via-white to-[#b8f3f5]   w-full min-w-full py-1 text-black "
         }`}
            >
              Profile
              <FaUser></FaUser>
            </Link>
            {/* blogs  */}
            <Link
              href={"/dashboard/my_blogs"}
              className={`flex gap-2 items-center pl-[80px]  font-medium  hover:bg-gradient-to-r hover:from-[#b8f3f5] hover:via-white hover:to-[#b8f3f5] w-full min-w-full  hover:text-black relative  py-1  
            ${
              pathname == "/dashboard/my_blogs" &&
              " bg-gradient-to-l from-[#b8f3f5] via-white to-[#b8f3f5]   w-full min-w-full py-1 text-black "
            }`}
            >
              My Blogs
              <TbMessageChatbot className=" text-2xl"></TbMessageChatbot>
            </Link>
            {/* list item  */}
            <Link
              href={"/dashboard/list_tour"}
              className={`flex gap-2 items-center pl-[80px]  font-medium  hover:bg-gradient-to-r hover:from-[#b8f3f5] hover:via-white hover:to-[#b8f3f5] w-full min-w-full  hover:text-black relative  py-1  
         ${
           pathname == "/dashboard/list_tour" &&
           " bg-gradient-to-l from-[#b8f3f5] via-white to-[#b8f3f5]   w-full min-w-full py-1 text-black "
         }`}
            >
              List Tour
              <MdPlaylistAddCircle className=" text-2xl"></MdPlaylistAddCircle>
            </Link>
            {/* listed item  */}
            <Link
              href={"/dashboard/listed_tour"}
              className={`flex gap-2 items-center pl-[80px]  font-medium  hover:bg-gradient-to-r hover:from-[#b8f3f5] hover:via-white hover:to-[#b8f3f5] w-full min-w-full  hover:text-black relative  py-1  
         ${
           pathname == "/dashboard/listed_tour" &&
           " bg-gradient-to-l from-[#b8f3f5] via-white to-[#b8f3f5]   w-full min-w-full py-1 text-black "
         }`}
            >
              Listed Tours
              <MdPlaylistAddCheckCircle className=" text-2xl"></MdPlaylistAddCheckCircle>
            </Link>
            {/* earnings */}
            <Link
              href={"/dashboard/earnings"}
              className={`flex gap-2 items-center pl-[80px]  font-medium  hover:bg-gradient-to-r hover:from-[#b8f3f5] hover:via-white hover:to-[#b8f3f5] w-full min-w-full  hover:text-black relative  py-1  
         ${
           pathname == "/dashboard/earnings" &&
           " bg-gradient-to-l from-[#b8f3f5] via-white to-[#b8f3f5]   w-full min-w-full py-1 text-black "
         }`}
            >
              Total Earnings
              <FaMoneyCheckDollar className="text-2xl"></FaMoneyCheckDollar>
            </Link>
          </div>
        )}

        {/* links for admin  */}
        {role == "admin" && (
          <div className=" flex gap-3 flex-col w-full min-w-full">
            {/* profile  */}
            <Link
              href={"/dashboard"}
              className={`flex gap-2 items-center pl-[80px]  font-medium  hover:bg-gradient-to-r hover:from-[#b8f3f5] hover:via-white hover:to-[#b8f3f5] w-full min-w-full  hover:text-black relative  py-1  
         ${
           pathname == "/dashboard" &&
           " bg-gradient-to-l from-[#b8f3f5] via-white to-[#b8f3f5]   w-full min-w-full py-1 text-black "
         }`}
            >
              Profile
              <FaUser></FaUser>
            </Link>
            {/* blogs  */}
            <Link
              href={"/dashboard/my_blogs"}
              className={`flex gap-2 items-center pl-[80px]  font-medium  hover:bg-gradient-to-r hover:from-[#b8f3f5] hover:via-white hover:to-[#b8f3f5] w-full min-w-full  hover:text-black relative  py-1  
            ${
              pathname == "/dashboard/my_blogs" &&
              " bg-gradient-to-l from-[#b8f3f5] via-white to-[#b8f3f5]   w-full min-w-full py-1 text-black "
            }`}
            >
              My Blogs
              <TbMessageChatbot className=" text-2xl"></TbMessageChatbot>
            </Link>
            {/* list item  */}
            <Link
              href={"/dashboard/list_tour"}
              className={`flex gap-2 items-center pl-[80px]  font-medium  hover:bg-gradient-to-r hover:from-[#b8f3f5] hover:via-white hover:to-[#b8f3f5] w-full min-w-full  hover:text-black relative  py-1  
         ${
           pathname == "/dashboard/list_tour" &&
           " bg-gradient-to-l from-[#b8f3f5] via-white to-[#b8f3f5]   w-full min-w-full py-1 text-black "
         }`}
            >
              List Tour
              <MdPlaylistAddCircle className=" text-2xl"></MdPlaylistAddCircle>
            </Link>
            <Link
              href={"/dashboard/listed_tour"}
              className={`flex gap-2 items-center pl-[80px]  font-medium  hover:bg-gradient-to-r hover:from-[#b8f3f5] hover:via-white hover:to-[#b8f3f5] w-full min-w-full  hover:text-black relative  py-1  
         ${
           pathname == "/dashboard/listed_tour" &&
           " bg-gradient-to-l from-[#b8f3f5] via-white to-[#b8f3f5]   w-full min-w-full py-1 text-black "
         }`}
            >
              Listed Tours
              <MdPlaylistAddCheckCircle className=" text-2xl"></MdPlaylistAddCheckCircle>
            </Link>
            {/* all items  */}
            <Link
              href={"/dashboard/all_tours"}
              className={`flex gap-2 items-center pl-[80px]  font-medium  hover:bg-gradient-to-r hover:from-[#b8f3f5] hover:via-white hover:to-[#b8f3f5] w-full min-w-full  hover:text-black relative  py-1  
         ${
           pathname == "/dashboard/all_tours" &&
           " bg-gradient-to-l from-[#b8f3f5] via-white to-[#b8f3f5]   w-full min-w-full py-1 text-black "
         }`}
            >
              All Tours
              <MdPlaylistAddCheckCircle className=" text-2xl"></MdPlaylistAddCheckCircle>
            </Link>
            {/* users  */}
            <Link
              href={"/dashboard/users"}
              className={`flex gap-2 items-center pl-[80px]  font-medium  hover:bg-gradient-to-r hover:from-[#b8f3f5] hover:via-white hover:to-[#b8f3f5] w-full min-w-full  hover:text-black relative  py-1  
         ${
           pathname == "/dashboard/users" &&
           " bg-gradient-to-l from-[#b8f3f5] via-white to-[#b8f3f5]   w-full min-w-full py-1 text-black "
         }`}
            >
              All Users
              <FaUsers className="text-2xl"></FaUsers>
            </Link>
            {/*  hosts  */}
            <Link
              href={"/dashboard/hosts"}
              className={`flex gap-2 items-center pl-[80px]  font-medium  hover:bg-gradient-to-r hover:from-[#b8f3f5] hover:via-white hover:to-[#b8f3f5] w-full min-w-full  hover:text-black relative  py-1  
         ${
           pathname == "/dashboard/hosts" &&
           " bg-gradient-to-l from-[#b8f3f5] via-white to-[#b8f3f5]   w-full min-w-full py-1 text-black "
         }`}
            >
              All Hosts
              <FaUserTie className="text-xl"></FaUserTie>
            </Link>
          </div>
        )}
      </div>
      <div className="divider"></div>
      {/* static links div  */}
      <div className="flex gap-2 flex-col w-full min-w-full">
        <Link
          href={"/"}
          className={`flex gap-2 items-center pl-[80px]  font-medium  hover:bg-gradient-to-r hover:from-[#b8f3f5] hover:via-white hover:to-[#b8f3f5] w-full min-w-full  hover:text-black relative  py-1`}
        >
          <ImHome className="text-xl"></ImHome> Home{" "}
        </Link>
        <Link
          href={"/tours"}
          className={`flex gap-2 items-center pl-[80px]  font-medium  hover:bg-gradient-to-r hover:from-[#b8f3f5] hover:via-white hover:to-[#b8f3f5] w-full min-w-full  hover:text-black relative  py-1`}
        >
          <MdOutlineTravelExplore className="text-xl"></MdOutlineTravelExplore>{" "}
          Tours{" "}
        </Link>
        <Link
          href={"/start_hosting"}
          className={`flex gap-2 items-center pl-[80px]  font-medium  hover:bg-gradient-to-r hover:from-[#b8f3f5] hover:via-white hover:to-[#b8f3f5] w-full min-w-full  hover:text-black relative  py-1 ${
            role == "user" ? "block" : "hidden"
          }`}
        >
          <MdAddHomeWork className="text-xl"></MdAddHomeWork> Start Hosting{" "}
        </Link>
        <Link
          href={"/blogs"}
          className={`flex gap-2 items-center pl-[80px]  font-medium  hover:bg-gradient-to-r hover:from-[#b8f3f5] hover:via-white hover:to-[#b8f3f5] w-full min-w-full  hover:text-black relative  py-1`}
        >
          <TbMessageChatbot className="text-xl"></TbMessageChatbot> Blogs{" "}
        </Link>
        <Link
          href={"/reviews"}
          className={`flex gap-2 items-center pl-[80px]  font-medium  hover:bg-gradient-to-r hover:from-[#b8f3f5] hover:via-white hover:to-[#b8f3f5] w-full min-w-full  hover:text-black relative  py-1`}
        >
          <MdReviews className="text-xl"></MdReviews> Reviews{" "}
        </Link>
        <Link
          href={"/contact_us"}
          className={`flex gap-2 items-center pl-[80px]  font-medium  hover:bg-gradient-to-r hover:from-[#b8f3f5] hover:via-white hover:to-[#b8f3f5] w-full min-w-full  hover:text-black relative  py-1 ${
            role == "admin" && "hidden"
          }`}
        >
          <MdContactSupport className="text-xl"></MdContactSupport> Contact us{" "}
        </Link>
        <div className="pl-[80px]">
          <button
            className="btn-primary flex justify-center items-center gap-2 max-w-36"
            onClick={handleLogout}
          >
            <span> Logout</span>{" "}
            <MdLogout className=" text-base  md:text-xl"></MdLogout>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SidebarLg;
