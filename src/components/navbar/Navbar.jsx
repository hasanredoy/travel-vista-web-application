import Link from "next/link";

import { ImHome } from "react-icons/im";



const Navbar = () => {

  const navLinks =<>
  <Link href={'/'} className="text-base font-bold flex gap-2 items-center"><ImHome></ImHome> Home</Link>
  <Link href={'/'} className="text-base font-bold flex gap-2 items-center">All Places</Link>
  <Link href={'/'} className="text-base font-bold flex gap-2 items-center">Start Hosting</Link>
  <Link href={'/'} className="text-base font-bold flex gap-2 items-center">Reviews</Link>
  <Link href={'/'} className="text-base font-bold flex gap-2 items-center">Contact us </Link>
  </>
  return (
    <nav className=" nav relative ">
    <container className="navbar w-[90%] mx-auto lg:w-[85%]">
    <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
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
            className=" h-full dropdown-content bg-[#08F3E7] bg-opacity-10 bg-transparent  w-[300px]    min-h-screen  z-[20] mt-2 absolute -left-28 flex flex-col gap-3 pl-20 pt-5 "
          >
           {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">daisyUI</a>
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
