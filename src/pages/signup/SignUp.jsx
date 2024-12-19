"use client"
import Image from "next/image";
import Link from "next/link";
import { Suspense, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FiLoader } from "react-icons/fi";


const SingUp = () => {
  // state to handle loading
  const [loading, setLoading] = useState(false);
  // state show and hide password
  const [showPass, setShowPass] = useState(false);
  return (
    <Suspense fallback={<span>Loading</span>}>
    <main className=" min-h-screen my-10  max-w-[90%]  lg:max-w-[85%] mx-auto">
      <div className="flex flex-col-reverse items-center gap-5 md:flex-row">
        <div className="text-center flex-1 lg:text-left">
          <Image
            src="https://i.postimg.cc/c43FvsQp/Sign-up-rafiki.png"
            className=""
            alt="sign up banner imge"
            height={500}
            width={500}
          />
        </div>
        <div className="flex-1 border border-gray-200 rounded-md  bg-base-200 w-full max-w-md shrink-0 ">
          <h3 className=" text-lg font-medium text-center subtitle pt-3">Please Login</h3>

          <form  className="card-body">
            <div className="form-control">
              <label className="label">
                <span className=" text-sm font-bold lg:text-lg  ">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            {/* password div  */}
            <div className="form-control relative">
              <label className="label">
                <span className="   text-sm font-bold lg:text-base ">
                  Password
                </span>
              </label>
              <input
                type={showPass ? "text" : "password"}
                placeholder="Password"
                className="input input-bordered"
                required
                name="password"
              />
              <a
                onClick={() => setShowPass(!showPass)}
                className=" absolute top-[56px] right-3 "
              >
                {showPass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
              </a>
             
            </div>
            <div className="mt-6 flex justify-center w-full">
              <button disabled={loading} className="btn btn-primary min-w-32 max-w-32">
                {loading ? (
                  <FiLoader className=" animate-spin text-2xl font-bold text-black"></FiLoader>
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </form>
          <div className="divider">or</div>
          <Link
            href={"/register"}
            className=" py-3 flex  justify-center gap-2 text-sm lg:text-base text-center "
          >
            New in <span className=" font-bold">Travel Vista?</span> Please{" "}
            <span className=" font-semibold text-blue-700">Register</span>.
          </Link>
        </div>
      </div>
    </main>
    </Suspense>
  );
};

export default SingUp;