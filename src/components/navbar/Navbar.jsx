'use client'
import Link from "next/link";

import { ImHome } from "react-icons/im";
import { MdOutlineTravelExplore, MdReviews } from "react-icons/md";
import { MdAddHomeWork } from "react-icons/md";
import { MdContactSupport } from "react-icons/md";
import './navbar.css'
import { usePathname } from "next/navigation";
import trip from '../../../public/assets/trip.gif'
import Image from "next/image";
import logo from '../../../public/assets/logo.png'



const Navbar = () => {

  const path = usePathname()
  console.log(path)

  // nav links 
  const navLinks =<>
  <Link href={'/'} className={`text-base font-bold flex gap-2 items-center hover:text-violet-600  ${path=='/'&&'text-violet-600'}`}><ImHome className="text-xl"></ImHome> Home</Link>
  <Link href={'/all_places'} className={`text-base font-bold flex gap-2 items-center hover:text-violet-600 ${path=='/all_places'&&'text-violet-600'}`}><MdOutlineTravelExplore className="text-xl"></MdOutlineTravelExplore> All Places</Link>
  <Link href={'/start_hosting'} className={`text-base font-bold flex gap-2 items-center hover:text-violet-600 ${path=='/start_hosting'&&'text-violet-600'}`}><MdAddHomeWork className="text-xl"></MdAddHomeWork> Start Hosting</Link>
  <Link href={'/reviews'} className={`text-base font-bold flex gap-2 items-center hover:text-violet-600 ${path=='/reviews'&&'text-violet-600'}`}><MdReviews className="text-xl"></MdReviews> Reviews</Link>
  <Link href={'/contact_us'} className={`text-base font-bold flex gap-2 items-center hover:text-violet-600 ${path=='/contact_us'&&'text-violet-600'}`}><MdContactSupport className="text-xl"></MdContactSupport> Contact us </Link>
  </>
  return (
    <nav className="shadow-lg  nav relative ">
    <container className="navbar w-[90%] mx-auto lg:w-[85%]">
    <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" title="click outside to close" className="btn btn-ghost btn-circle">
            <svg
            
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className=" h-full dropdown-content dropDown bg-[#08F3E7] shadow-lg shadow-blue-300 bg-opacity-40   w-[200px] md:w-[240px] lg:w-[300px]    min-h-screen  z-[20] mt-2 absolute -left-10 md:-left-14 lg:-left-28 flex flex-col gap-3 pl-5 md:pl-16 lg:pl-20 pt-5 "
          >
           {navLinks}
           <div>
            <Image src={trip} alt="trip " width={60} height={60} className=" absolute top-0 right-0"></Image>
           </div>
          </ul>
        </div>
      </div>
      <div className="navbar-center">

        <Link href={'/'}><Image src={logo} width={200} height={50} alt="logo"></Image></Link>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </container>
    </nav>
  );
};

export default Navbar;
