"use client";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { FiLoader } from "react-icons/fi";
import { signIn } from "next-auth/react";
import swal from "sweetalert";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";


const Login = () => {
  // state to handle loading
  const [loading, setLoading] = useState(false);
  // state show and hide password
  const [showPass, setShowPass] = useState(false);
  const router = useRouter();

  // login handler
  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    const email = event.target.email.value;
    const password = event.target.password.value;
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (response) {
      setLoading(false);
    }
    if (response.status == 401) {
      swal("Please check your email and password, try again", "", "error");
    }
   
    if (response.status == 200) {
      swal("Logged in Successfully", "", "success");
      router.push("/");
    }
  };

  const handleGoogleLogin = () => {
    const response=signIn("google",{
    redirect:false
    })
    if (response.status == 401) {
      swal("Please check your email and password, try again", "", "error");
    }
   
    if (response.status == 200) {
      swal("Logged in Successfully", "", "success");
      router.push("/");
    }
  };
  return (
    <Suspense fallback={<span>Loading</span>}>
      <main className=" min-h-screen my-10  max-w-[90%]  lg:max-w-[85%] mx-auto">
        <div className="flex flex-col items-center gap-5 md:flex-row">
          <div className="text-center flex-1 lg:text-left">
            <Image
              src="https://i.postimg.cc/52HKf46Q/Tablet-login-bro.png"
              className=""
              alt="login banner imge"
              height={500}
              width={500}
            />
          </div>
          <div className="flex-1 border border-gray-200 rounded-md  bg-base-200 w-full max-w-md shrink-0 ">
            <h3 className=" text-lg font-medium text-center subtitle pt-3">
              Please Login
            </h3>

            <form onSubmit={handleLogin} className="card-body">
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
                <button
                  disabled={loading}
                  className=" btn-primary min-w-32 flex justify-center items-center w-full max-w-32"
                >
                  {loading ? (
                    <FiLoader className=" animate-spin text-2xl font-bold text-black"></FiLoader>
                  ) : (
                    "Login"
                  )}
                </button>
              </div>
            </form>
            <div className="divider">or</div>

            <div className=" flex justify-center my-4">
              <button
                onClick={handleGoogleLogin}
                className=" p-2 px-4 rounded-md bg-neutral-900 text-white  flex justify-center items-center gap-2 hover:bg-white hover:text-neutral-900 border hover:border-neutral-900 "
              >
              Login with
                <FcGoogle></FcGoogle>
              </button>
            </div>
            <Link
              href={"/signup"}
              className=" py-3 flex  justify-center gap-2 text-sm lg:text-base text-center "
            >
              New in <span className=" font-bold">Travel Vista?</span> Please{" "}
              <span className=" font-semibold text-blue-700">Sign Up</span>.
            </Link>
          </div>
        </div>
      </main>
    </Suspense>
  );
};

export default Login;
