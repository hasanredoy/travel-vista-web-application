"use client";
import { usePostImage } from "@/hooks/post-image/usePostImage";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Suspense, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FiLoader } from "react-icons/fi";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import swal from "sweetalert";

const SingUp = () => {
  // state to handle loading
  const [loading, setLoading] = useState(false);
  // state show and hide password
  const [showPass, setShowPass] = useState(false);
  // stat for phone number
  const [phone, setPhone] = useState();
  // stat for image url
  const [imageUrl, setImageUrl] = useState("");

  // get image address after hosting image
  const hostedImage = usePostImage(imageUrl, setLoading);

  const router = useRouter()

  const handleSignUp = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const password = form.password.value;
    if (!phone||phone?.length<5) {
      return swal("Enter a valid phone number.","", "error");
      
    }
    if (password.length < 6) {
      return swal("Password must be 6 charecter","", "error");
    }
    // user data object
    const userData = {
      name: form.name.value,
      photo: hostedImage,
      phone,
      email: form.email.value,
      password: form.password.value,
      type:"user",
      date:new Date(),
      bio:form.bio.value
    };
    axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post-user`,userData)
    .then(res=>{
      setLoading(false)
      if(res?.data?.message=='user exist'){
       return swal("Email already in use.","", "error");
      }
      if(res?.data?.result?.insertedId){
        swal("Signup Successfully","", "success");
        router.push('/login')
      }
    })
  };
  return (
    <Suspense fallback={<span>Loading</span>}>
      <main className=" min-h-screen my-10  max-w-[90%]  lg:max-w-[85%] mx-auto">
        <div className="flex flex-col items-center justify-center gap-5 md:flex-row-reverse ">
          <div className="text-center  lg:text-left">
            <Image
              src="https://i.postimg.cc/c43FvsQp/Sign-up-rafiki.png"
              className=""
              alt="sign up banner imge"
              height={500}
              width={500}
            />
          </div>
          <div className="flex-1 border border-gray-200 rounded-md  bg-base-200 w-full max-w-md shrink-0 ">
            <h3 className=" text-lg font-medium text-center subtitle pt-3">
              Please Sign Up!
            </h3>

            <form onSubmit={handleSignUp} className="card-body">
              {/* Name div  */}
              <div className="form-control">
                <label className="label">
                  <span className="   text-sm font-bold lg:text-base ">
                    Full Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  name={"name"}
                  className="input input-bordered"
                  required
                />
              </div>
              {/* Phone number div  */}
              <div className="form-control">
                <label className="label">
                  <span className="   text-sm font-bold lg:text-base ">
                    Phone Number
                  </span>
                </label>
                <PhoneInput
                  className=" input input-bordered"
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={setPhone}
                />
              </div>
              {/* photo div  */}
              <div className="form-control">
                <label className="label">
                  <span className="   text-sm font-bold lg:text-base ">
                    Photo
                  </span>
                </label>
                <input
                  onChange={(event) => setImageUrl(event.target.files[0])}
                  type="file"
                  required
                  className=" file-input file-input-bordered file-input-accent"
                />
              </div>
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
              {/* bio div  */}
              <div className="form-control relative">
                <label className="label">
                  <span className="   text-sm font-bold lg:text-base ">
                    Bio 
                  </span>
                </label>
                <textarea
                  placeholder="Bio.."
                  className="textarea textarea-bordered"
                  required
                  name="bio"
                />
              </div>
              <div className="mt-6 flex justify-center w-full">
                <button
                  disabled={loading}
                  className="btn btn-primary min-w-32 max-w-32"
                >
                  {loading ? (
                    <FiLoader className=" animate-spin text-2xl font-bold text-black"></FiLoader>
                  ) : (
                    "Sign Up"
                  )}
                </button>
              </div>
            </form>
            <Link
              href={"/login"}
              className=" py-3 flex  justify-center gap-2 text-sm lg:text-base text-center "
            >
              Already Member of<span className=" font-bold">Travel Vista?</span>
              <span className=" font-semibold text-blue-700">Login.</span>
            </Link>
          </div>
        </div>
      </main>
    </Suspense>
  );
};

export default SingUp;
