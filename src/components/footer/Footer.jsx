import Image from "next/image";
import logo from "../../../public/assets/logo.png";
import Link from "next/link";
import playstore from '../../../public/assets/footer/png-transparent-google-play-computer-icons-android-google-text-label-logo-removebg-preview.png'
import microsoft from '../../../public/assets/footer/png-transparent-microsoft-store-windows-10-android-app-store-logo-text-logo-microsoft-store-removebg-preview.png'

const Footer = () => {
  return (
    <footer className="footer  px-5 lg:px-28 overflow-hidden bg-gradient-to-b from-[#e7f7f6] via-[#bef1f5] to-[#a8f7f1]  p-4  lg:p-10">
      <section className="flex  flex-col md:flex-row gap-10  min-w-[100%]  w-full  ">
        <div className="flex-1 ">
          <Link href={"/"}>
            <Image
              src={logo}
              className=" w-full md:w-[180px] lg:w-[250px]"
              width={200}
              height={50}
              alt="logo"
            ></Image>
          </Link>
          <div className=" mt-8">
            <h4 className=" text-base">
              Email: <span className="  font-semibold">tavelvista@gmail.com</span>
            </h4>
            <h4 className=" text-base ">
              Number: <span  className="  font-semibold">+880182-65666</span>
            </h4>
            <p className=" mt-3 text-base font-medium"> All rights reserved &copy; || by Travel Vista </p>
          </div>
        </div>
     <section className="flex flex-1 justify-between w-full">
     <div className=" flex flex-col  gap-2 flex-1 ">
          <h3 className=" font-bold text-lg">Useful Links</h3>
          <Link href={"/"} className={`text-base   flex gap-2 `}>
            Home{" "}
          </Link>
          <Link href={"/tours"} className={`text-base   flex gap-2 `}>
            Tours{" "}
          </Link>
          <Link href={"/start_hosting"} className={`text-base   flex gap-2 `}>
            Start Hosting{" "}
          </Link>
          <Link href={"/reviews"} className={`text-base   flex gap-2 `}>
            Reviews{" "}
          </Link>
          <Link href={"/contact_us"} className={`text-base   flex gap-2`}>
            Contact us{" "}
          </Link>
        </div>
        <nav className=" flex-1 w-full lg:w-1/3 flex flex-col    pb-0 md:pb-8">
          <h1 className="   text-lg md:text-xl pb-3">Follow Us On</h1>
          <div className="flex  gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
          <h4 className=" text-lg font-semibold my-5">Download app</h4>
          <div>
            <Image className=" cursor-pointer w-28 lg:w-52 mb-5" width={200} height={100} alt="play store logo" src={playstore}></Image>
            <Image className=" cursor-pointer w-28 lg:w-52 " width={200} height={100} alt="microsoft logo" src={microsoft}></Image>
          </div>
        </nav>
     </section>
      </section>
    </footer>
  );
};

export default Footer;
