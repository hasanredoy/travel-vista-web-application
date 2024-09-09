'use client'
import Link from "next/link";

import { ImHome } from "react-icons/im";
import { MdOutlineTravelExplore, MdReviews } from "react-icons/md";
import { MdAddHomeWork } from "react-icons/md";
import { MdContactSupport } from "react-icons/md";
import { usePathname } from "next/navigation";
import trip from '../../../public/assets/trip.gif'
import Image from "next/image";
import logo from '../../../public/assets/logo.png'
import { RiMenuUnfold3Fill } from "react-icons/ri";
import { LuLogIn } from "react-icons/lu";



const Navbar = () => {
//  get pathname
  const path = usePathname()
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
    <container className="navbar w-[96%] mx-auto lg:w-[85%]">
    <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" title="click outside to close" className="btn btn-ghost btn-circle">
           <RiMenuUnfold3Fill className="text-xl md:text-2xl lg:text-3xl"></RiMenuUnfold3Fill>
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

        <Link href={'/'}><Image src={logo} className=" w-[120px] md:w-[180px] lg:w-[250px]" width={200} height={50} alt="logo"></Image></Link>
      </div>
      <div className="navbar-end">
       <Link href={'/login'}>
       <button className=" btn-nav">Login<LuLogIn className=" text-base md:text-xl"></LuLogIn> </button></Link>
      </div>
    </container>
    </nav>
  );
};

export default Navbar;
