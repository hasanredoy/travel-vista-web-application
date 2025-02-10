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
import { useState } from "react";
import { RiMenuUnfold3Fill, RiMenuUnfold4Fill } from "react-icons/ri";

const SidebarSm = () => {
  // state to handle menu
  const [showMenu, setShowMenu] = useState(false);
  // get user
  const { user } = useSession()?.data || {};

  // get pathname
  const pathname = usePathname();
  // get user role
  const role = "host";

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
    <section className=" relative w-[180px]">
      <div className=" absolute top-1 left-1 z-50 ">
      {showMenu ? (
        <button onClick={() => setShowMenu(false)}>
          <RiMenuUnfold4Fill className=" text-lg" />
        </button>
      ) : (
        <button onClick={() => setShowMenu(true)}>
          <RiMenuUnfold3Fill className=" text-lg" />
        </button>
      )}
      </div>
      {showMenu && (
        <section
          className=" absolute top-0 left-0 min-h-dvh bg-gradient-to-r from-white via-[#b8f3f5] to-white py-4 flex items-center flex-col gap-3 justify-between z-40 w-full min-w-full
      drop-shadow-[3px_0_1px_rgba(0,0,0,0.3)] 
      "
        >
          {/* dynamic links div  */}
          <div className=" w-full min-w-full">
            {/* user info sect  */}
            <div className="flex items-center space-x-4  justify-center w-full">
              <Image
                src={user?.image}
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
                  className={`flex gap-2 items-center pl-[55px] text-sm   font-medium  hover:bg-gradient-to-r hover:from-[#b8f3f5] hover:via-white hover:to-[#b8f3f5] w-full min-w-full  hover:text-black relative  py-1  
            ${
              pathname == "/dashboard" &&
              " bg-gradient-to-l from-[#b8f3f5] via-white to-[#b8f3f5]   w-full min-w-full py-1 text-black "
            }`}
                >
                  Profile
                  <FaUser className=" text-sm"></FaUser>
                </Link>
                {/* blogs  */}
                <Link
                  href={"/dashboard/my_blogs"}
                  className={`flex gap-2 items-center pl-[55px] text-sm   font-medium  hover:bg-gradient-to-r hover:from-[#b8f3f5] hover:via-white hover:to-[#b8f3f5] w-full min-w-full  hover:text-black relative  py-1  
            ${
              pathname == "/dashboard/my_blogs" &&
              " bg-gradient-to-l from-[#b8f3f5] via-white to-[#b8f3f5]   w-full min-w-full py-1 text-black "
            }`}
                >
                  My Blogs
                  <TbMessageChatbot className=" "></TbMessageChatbot>
                </Link>
                {/* bookings  */}
                <Link
                  href={"/dashboard/my_bookings"}
                  className={`flex gap-2 items-center pl-[55px] text-sm   font-medium  hover:bg-gradient-to-r hover:from-[#b8f3f5] hover:via-white hover:to-[#b8f3f5] w-full min-w-full  hover:text-black relative  py-1  
            ${
              pathname == "/dashboard/my_bookings" &&
              " bg-gradient-to-l from-[#b8f3f5] via-white to-[#b8f3f5]   w-full min-w-full py-1 text-black "
            }`}
                >
                  My Bookings
                  <FaCalendarCheck className=" "></FaCalendarCheck>
                </Link>

                {/* payment history  */}
                <Link
                  href={"/dashboard/payment_history"}
                  className={`flex gap-2 items-center pl-[55px] text-sm   font-medium  hover:bg-gradient-to-r hover:from-[#b8f3f5] hover:via-white hover:to-[#b8f3f5] w-full min-w-full  hover:text-black relative  py-1  
            ${
              pathname == "/dashboard/payment_history" &&
              " bg-gradient-to-l from-[#b8f3f5] via-white to-[#b8f3f5]   w-full min-w-full py-1 text-black "
            }`}
                >
                  Payment History
                  <MdPayment className="  "></MdPayment>
                </Link>
              </div>
            )}

            {/* links for host  */}
            {role == "host" && (
              <div className=" flex gap-3 flex-col w-full min-w-full">
                {/* profile  */}
                <Link
                  href={"/dashboard"}
                  className={`flex gap-2 items-center pl-[55px] text-sm   font-medium  hover:bg-gradient-to-r hover:from-[#b8f3f5] hover:via-white hover:to-[#b8f3f5] w-full min-w-full  hover:text-black relative  py-1  
         ${
           pathname == "/dashboard" &&
           " bg-gradient-to-l from-[#b8f3f5] via-white to-[#b8f3f5]   w-full min-w-full py-1 text-black "
         }`}
                >
                  Profile
                  <FaUser className=" text-sm"></FaUser>
                </Link>
                {/* blogs  */}
                <Link
                  href={"/dashboard/my_blogs"}
                  className={`flex gap-2 items-center pl-[55px] text-sm   font-medium  hover:bg-gradient-to-r hover:from-[#b8f3f5] hover:via-white hover:to-[#b8f3f5] w-full min-w-full  hover:text-black relative  py-1  
            ${
              pathname == "/dashboard/my_blogs" &&
              " bg-gradient-to-l from-[#b8f3f5] via-white to-[#b8f3f5]   w-full min-w-full py-1 text-black "
            }`}
                >
                  My Blogs
                  <TbMessageChatbot className="  "></TbMessageChatbot>
                </Link>
                {/* list item  */}
                <Link
                  href={"/dashboard/list_item"}
                  className={`flex gap-2 items-center pl-[55px] text-sm   font-medium  hover:bg-gradient-to-r hover:from-[#b8f3f5] hover:via-white hover:to-[#b8f3f5] w-full min-w-full  hover:text-black relative  py-1  
         ${
           pathname == "/dashboard/list_item" &&
           " bg-gradient-to-l from-[#b8f3f5] via-white to-[#b8f3f5]   w-full min-w-full py-1 text-black "
         }`}
                >
                  List Item
                  <MdPlaylistAddCircle className="  "></MdPlaylistAddCircle>
                </Link>
                {/* listed item  */}
                <Link
                  href={"/dashboard/listed_item"}
                  className={`flex gap-2 items-center pl-[55px] text-sm   font-medium  hover:bg-gradient-to-r hover:from-[#b8f3f5] hover:via-white hover:to-[#b8f3f5] w-full min-w-full  hover:text-black relative  py-1  
         ${
           pathname == "/dashboard/listed_item" &&
           " bg-gradient-to-l from-[#b8f3f5] via-white to-[#b8f3f5]   w-full min-w-full py-1 text-black "
         }`}
                >
                  Listed Items
                  <MdPlaylistAddCheckCircle className="  "></MdPlaylistAddCheckCircle>
                </Link>
                {/* earnings */}
                <Link
                  href={"/dashboard/earnings"}
                  className={`flex gap-2 items-center pl-[55px] text-sm   font-medium  hover:bg-gradient-to-r hover:from-[#b8f3f5] hover:via-white hover:to-[#b8f3f5] w-full min-w-full  hover:text-black relative  py-1  
         ${
           pathname == "/dashboard/earnings" &&
           " bg-gradient-to-l from-[#b8f3f5] via-white to-[#b8f3f5]   w-full min-w-full py-1 text-black "
         }`}
                >
                  Total Earnings
                  <FaMoneyCheckDollar className=" "></FaMoneyCheckDollar>
                </Link>
              </div>
            )}

            {/* links for admin  */}
            {role == "admin" && (
              <div className=" flex gap-3 flex-col w-full min-w-full">
                {/* profile  */}
                <Link
                  href={"/dashboard"}
                  className={`flex gap-2 items-center pl-[55px] text-sm   font-medium  hover:bg-gradient-to-r hover:from-[#b8f3f5] hover:via-white hover:to-[#b8f3f5] w-full min-w-full  hover:text-black relative  py-1  
         ${
           pathname == "/dashboard" &&
           " bg-gradient-to-l from-[#b8f3f5] via-white to-[#b8f3f5]   w-full min-w-full py-1 text-black "
         }`}
                >
                  Profile
                  <FaUser className=" text-sm"></FaUser>
                </Link>
                {/* blogs  */}
                <Link
                  href={"/dashboard/my_blogs"}
                  className={`flex gap-2 items-center pl-[55px] text-sm   font-medium  hover:bg-gradient-to-r hover:from-[#b8f3f5] hover:via-white hover:to-[#b8f3f5] w-full min-w-full  hover:text-black relative  py-1  
            ${
              pathname == "/dashboard/my_blogs" &&
              " bg-gradient-to-l from-[#b8f3f5] via-white to-[#b8f3f5]   w-full min-w-full py-1 text-black "
            }`}
                >
                  My Blogs
                  <TbMessageChatbot className="  "></TbMessageChatbot>
                </Link>
                {/* list item  */}
                <Link
                  href={"/dashboard/list_item"}
                  className={`flex gap-2 items-center pl-[55px] text-sm   font-medium  hover:bg-gradient-to-r hover:from-[#b8f3f5] hover:via-white hover:to-[#b8f3f5] w-full min-w-full  hover:text-black relative  py-1  
         ${
           pathname == "/dashboard/list_item" &&
           " bg-gradient-to-l from-[#b8f3f5] via-white to-[#b8f3f5]   w-full min-w-full py-1 text-black "
         }`}
                >
                  List Item
                  <MdPlaylistAddCircle className="  "></MdPlaylistAddCircle>
                </Link>
                {/* all items  */}
                <Link
                  href={"/dashboard/all_items"}
                  className={`flex gap-2 items-center pl-[55px] text-sm   font-medium  hover:bg-gradient-to-r hover:from-[#b8f3f5] hover:via-white hover:to-[#b8f3f5] w-full min-w-full  hover:text-black relative  py-1  
         ${
           pathname == "/dashboard/all_items" &&
           " bg-gradient-to-l from-[#b8f3f5] via-white to-[#b8f3f5]   w-full min-w-full py-1 text-black "
         }`}
                >
                  All Items
                  <MdPlaylistAddCheckCircle className="  "></MdPlaylistAddCheckCircle>
                </Link>
                {/* users  */}
                <Link
                  href={"/dashboard/users"}
                  className={`flex gap-2 items-center pl-[55px] text-sm   font-medium  hover:bg-gradient-to-r hover:from-[#b8f3f5] hover:via-white hover:to-[#b8f3f5] w-full min-w-full  hover:text-black relative  py-1  
         ${
           pathname == "/dashboard/users" &&
           " bg-gradient-to-l from-[#b8f3f5] via-white to-[#b8f3f5]   w-full min-w-full py-1 text-black "
         }`}
                >
                  All Users
                  <FaUsers className=" "></FaUsers>
                </Link>
                {/*  hosts  */}
                <Link
                  href={"/dashboard/hosts"}
                  className={`flex gap-2 items-center pl-[55px] text-sm   font-medium  hover:bg-gradient-to-r hover:from-[#b8f3f5] hover:via-white hover:to-[#b8f3f5] w-full min-w-full  hover:text-black relative  py-1  
         ${
           pathname == "/dashboard/hosts" &&
           " bg-gradient-to-l from-[#b8f3f5] via-white to-[#b8f3f5]   w-full min-w-full py-1 text-black "
         }`}
                >
                  All Hosts
                  <FaUserTie className=""></FaUserTie>
                </Link>
              </div>
            )}
          </div>
          <div className="divider"></div>
          {/* static links div  */}
          <div className="flex gap-2 flex-col w-full min-w-full">
            <Link
              href={"/"}
              className={`flex gap-2 items-center pl-[55px] text-sm   font-medium  hover:bg-gradient-to-r hover:from-[#b8f3f5] hover:via-white hover:to-[#b8f3f5] w-full min-w-full  hover:text-black relative  py-1`}
            >
              <ImHome className=" "></ImHome> Home{" "}
            </Link>
            <Link
              href={"/tours"}
              className={`flex gap-2 items-center pl-[55px] text-sm   font-medium  hover:bg-gradient-to-r hover:from-[#b8f3f5] hover:via-white hover:to-[#b8f3f5] w-full min-w-full  hover:text-black relative  py-1`}
            >
              <MdOutlineTravelExplore className=" "></MdOutlineTravelExplore>{" "}
              Tours{" "}
            </Link>
            <Link
              href={"/start_hosting"}
              className={`flex gap-2 items-center pl-[55px] text-sm   font-medium  hover:bg-gradient-to-r hover:from-[#b8f3f5] hover:via-white hover:to-[#b8f3f5] w-full min-w-full  hover:text-black relative  py-1 ${
                role == "user" ? "block" : "hidden"
              }`}
            >
              <MdAddHomeWork className=" "></MdAddHomeWork> Start Hosting{" "}
            </Link>
            <Link
              href={"/blogs"}
              className={`flex gap-2 items-center pl-[55px] text-sm   font-medium  hover:bg-gradient-to-r hover:from-[#b8f3f5] hover:via-white hover:to-[#b8f3f5] w-full min-w-full  hover:text-black relative  py-1`}
            >
              <TbMessageChatbot className=" "></TbMessageChatbot> Blogs{" "}
            </Link>
            <Link
              href={"/reviews"}
              className={`flex gap-2 items-center pl-[55px] text-sm   font-medium  hover:bg-gradient-to-r hover:from-[#b8f3f5] hover:via-white hover:to-[#b8f3f5] w-full min-w-full  hover:text-black relative  py-1`}
            >
              <MdReviews className=" "></MdReviews> Reviews{" "}
            </Link>
            <Link
              href={"/contact_us"}
              className={`flex gap-2 items-center pl-[55px] text-sm   font-medium  hover:bg-gradient-to-r hover:from-[#b8f3f5] hover:via-white hover:to-[#b8f3f5] w-full min-w-full  hover:text-black relative  py-1 ${
                role == "admin" && "hidden"
              }`}
            >
              <MdContactSupport className=" "></MdContactSupport> Contact
              us{" "}
            </Link>
            <div className="pl-[55px] text-sm ">
              <button
                className="btn-primary flex justify-center items-center gap-2 max-w-36"
                onClick={handleLogout}
              >
                <span> Logout</span>{" "}
                <MdLogout className=" text-base  md: "></MdLogout>
              </button>
            </div>
          </div>
        </section>
      )}
    </section>
  );
};

export default SidebarSm;
