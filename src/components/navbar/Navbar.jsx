"use client";
import Link from "next/link";

import { ImHome } from "react-icons/im";
import { MdOutlineTravelExplore, MdReviews } from "react-icons/md";
import { MdAddHomeWork } from "react-icons/md";
import { MdContactSupport } from "react-icons/md";
import { usePathname } from "next/navigation";
import trip from "../../../public/assets/trip.gif";
import Image from "next/image";
import logo from "../../../public/assets/logo.png";
import { RiMenuUnfold3Fill } from "react-icons/ri";
import { LuLogIn } from "react-icons/lu";
import { PiLessThanFill } from "react-icons/pi";
import { FaDotCircle } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { TbMessageChatbot } from "react-icons/tb";


const Navbar = () => {
  //  get pathname
  const path = usePathname();
  // nav links
  const navLinks = (
    <>
      <Link
        href={"/"}
        className={`text-base font-bold flex gap-2 items-center hover:text-sky-500     hover:bg-white hover:max-w-40 hover:px-5 hover:rounded-md transition-all  ${
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
        className={`text-base font-bold flex gap-2 items-center hover:text-sky-500  hover:bg-white hover:max-w-40 hover:px-5 hover:rounded-md  transition-all  ${
          path == "/tours" &&'text-sky-500 bg-white  max-w-40 px-5 rounded-md'
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
        className={`text-base font-bold flex gap-2 items-center hover:text-sky-500  hover:bg-white hover:max-w-40 hover:px-5 hover:rounded-md transition-all  ${
          path == "/start_hosting" &&'text-sky-500 bg-white  max-w-40 px-5 rounded-md'
        }`}
      >
        <MdAddHomeWork className="text-xl"></MdAddHomeWork> Start Hosting{" "}
        {path == "/start_hosting" && (
          <GoDotFill className=" text-green-400 font-bold "></GoDotFill>
        )}
      </Link>
      <Link
        href={"/blogs"}
        className={`text-base font-bold flex gap-2 items-center hover:text-sky-500  hover:bg-white hover:max-w-40 hover:px-5 hover:rounded-md transition-all  ${
          path == "/start_hosting" &&'text-sky-500 bg-white  max-w-40 px-5 rounded-md'
        }`}
      >
        <TbMessageChatbot className="text-xl"></TbMessageChatbot> Blogs{" "}
        {path == "/start_hosting" && (
          <GoDotFill className=" text-green-400 font-bold "></GoDotFill>
        )}
      </Link>
      <Link
        href={"/reviews"}
        className={`text-base font-bold flex gap-2 items-center hover:text-sky-500  hover:bg-white hover:max-w-40 hover:px-5 hover:rounded-md transition-all  ${
          path == "/reviews" &&'text-sky-500 bg-white  max-w-40 px-5 rounded-md'
        }`}
      >
        <MdReviews className="text-xl"></MdReviews> Reviews{" "}
        {path == "/reviews" && (
          <GoDotFill className=" text-green-400 font-bold "></GoDotFill>
        )}
      </Link>
      <Link
        href={"/contact_us"}
        className={`text-base font-bold flex gap-2 items-center hover:text-sky-500  hover:bg-white hover:max-w-40 hover:px-5 hover:rounded-md transition-all  ${
          path == "/contact_us" &&'text-sky-500 bg-white  max-w-40 px-5 rounded-md'
        }`}
      >
        <MdContactSupport className="text-xl"></MdContactSupport> Contact us{" "}
        {path == "/contact_us" && (
          <GoDotFill className=" text-green-400 font-bold "></GoDotFill>
        )}
      </Link>
    </>
  );
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
              className=" h-full dropdown-content dropDown bg-[#a2faf6] shadow-lg shadow-blue-300 bg-opacity-90   w-[200px] md:w-[240px] lg:w-[320px]    min-h-screen  z-[50] mt-2 absolute -left-10 md:-left-14 lg:-left-32 flex flex-col gap-3 pl-5 md:pl-16 lg:pl-20 pt-5 "
            >
              {navLinks}
              <div>
                <Image
                  src={trip}
                  alt="trip "
                  width={60}
                  height={60}
                  className=" absolute top-0 right-0"
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
        <div className="navbar-end">
          <Link href={"/login"}>
            <button className=" btn-nav">
              Login<LuLogIn className=" text-base md:text-xl"></LuLogIn>{" "}
            </button>
          </Link>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
