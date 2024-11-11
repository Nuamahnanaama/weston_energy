"use client"
import Image from "next/image";
import React from "react";
import homepg from "../Components/Images/Homepge.jpg"
import { useRouter } from "next/navigation";



import logo from "../Components/Images/Logo.png";
const Header = () => {
const router = useRouter()
 
  // const handleSolutions=()=>{
  //   router.push("/Solutions")
  // };

  // const handlePartnership=()=>{
  //   router.push("/Paternership")
  // };

  // const handleContact=()=>{
  //  router.push("/Contact")
  // }


  return (
    <div className="relative px-16 h-[835px]">
      <Image
        src={homepg}
        alt="no img"
        className="absolute inset-0"
        width={1440}
        height={800}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 h-[100%] "></div>
      <div className="absolute inset-0">
        <div className="grid place-items-center">
          <div className=" w-[54%] flex justify-center space-x-9 gap-6 py-3 items-center mt-12 bg-opacity-20 bg-white/10 rounded-full border border-white/20 ">
            <Image src={logo} alt="no img" width={50} className="" />
            <div className="flex space-x-5">
              <button onClick={handleSolutions} className="text-white text-sm">Our Solution</button>
              <button onClick={handlePartnership} className="text-white text-sm">Why Weston Energy</button>
              <button onClick={handleContact} className="text-white text-sm">Strategic Partners</button>
            </div>
            <button className="text-white justify-end bg-blue-700 hover:bg-white hover:text-blue-700 border font-bold border-blue-700 rounded-full px-4 py-2">
              Contact Us
            </button>
          </div>
        </div>
        <div className="text-center font-bold px-28 text-5xl">
          <h1 className="mt-28">
            <span className="text-white text-opacity-60">Weston VP Energy:</span>
            <span className="text-white bg-[#D46f1E]">Fueling Your</span>
            <span className="text-white text-opacity-60"> Future With</span>
          </h1>
          <p className="text-white mt-3"> Clean,Cost-Effective Natural Gas</p>
        </div>

        <div className="flex gap-4  rounded-full justify-center mt-32">
          <div className="bg-[#D46f1E] flex rounded-full p-3 space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
              />
            </svg>
            <p className="text-white"> Affordable</p>
          </div>
          <div className="bg-pink-700 flex rounded-full p-3 space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className=" text-white size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
              />
            </svg>
            <p className="text-white"> Sustainable</p>
          </div>
          <div className="bg-purple-700 flex rounded-full p-3 space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="text-white size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6h.008v.008H6V6Z"
              />
            </svg>
            <p className="text-white"> Cost-Saving</p>
          </div>
        </div>
        <div className="grid place-content-center mt-7">
          <button className="inline-block border border-white py-2 px-8 rounded-full font-bold text-base text-white ">
            Get In Touch
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Header;
