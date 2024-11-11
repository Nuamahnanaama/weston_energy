import Image from "next/image";
import React from "react";
import circles from "../Components/Images/Circles.svg"
import lng from "../Components/Images/LNG.png";
import gas from "../Components/Images/gas.png";
import truck from "../Components/Images/truck.png";
import car from "../Components/Images/car.jpeg";
import cylinder from "../Components/Images/cylinder.png";
import station from "../Components/Images/station.jpeg";
import tank from "../Components/Images/tank.jpeg";
import oil from "../Components/Images/oil-tank.jpeg";
import mobile from "../Components/Images/mobile_lng2.jpg"
import stock from "../Components/Images/stockimg.jpg"
const Solutions = () => {
  return (
    <div className="w-[1064] h-[1270]">
      <div className="grid place-items-center">
        <div className="flex gap-2 mt-28 text-gray-600 ">
          <Image src={circles} alt="no img"/>
          <h1 className="text-5xl font-bold">Our Solution </h1>
        </div>
        <div>
          <p className="text-xl font-bold mt-7 pl-36">
            <span className="text-black/50">Natural Gas </span>
            <span className="text-black/50 border-r-2"> Solution Tailored</span>
            <span className="text-black/50"> for Industry And Transportation</span>
          </p>
          
          <div className="text-black/50 grid place-items-center">
            <p>
              We deliver efficient, sustainable, and
              cost-saving energy solution through our Liquefied Natural Gas (LNG) services
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="bg-blue-950 justify-center rounded-lg pb-4 mt-8 ">
         <div className="flex gap-3 ">
         <div className="col-span-5 ">
          <p className=" pl-4 text-3xl font-semibold mt-10">
            <span className="text-white">Liquefied</span>
            <span className="text-white"> Natural Gas</span>
          </p>
          <p className="text-white pl-4 text-3xl font-semibold">(LNG)</p>
          <div className="text-white pl-4 ">
          <p>LNG is primarily natural gas (methane) that has </p>
          <p>been converted to liquid form by cooling to a   </p>
          <p>temperature of about -2600F.This makes  </p>
          <p>it easier, safer and more efficient to transport </p>
          <p>in cryogenic tanks. </p>
          <p>In the liquid form,LNG takes a volume that is </p>
          <p>about 600 times smaller than the volume in the </p>
          <p> gaseous form.</p>
          </div>
        <div>
         </div>
         </div>
         <div className="col-span-5">
          <Image src={mobile} width={700} alt="no img" className="mt-3"/>
         </div>
         </div>
          </div>
        </div>
        <div className="flex">
          <div className="bg-black justify-center rounded-lg pb-4 mt-8">
         <div className="flex gap-2">
         <div className="col-span-5 ">
          <p className=" pl-4 text-4xl font-semibold mt-10">
            <span className="text-white">Benefits of LNG</span>
          </p>
        <div>
            <div className="flex gap mt-3 pl-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-white size-6">
          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
         </svg>
          <div>
         <h1 className="text-white"> Greater fuel storage capacity </h1>
        </div>
        </div>
       </div>
       <div>
        <div className="flex gap mt-3 pl-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-white size-6">
          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
         </svg>
          <div>
         <h1 className="text-white">Lower fuel cost– Savings of about 10% to 30% 
         </h1>
         <h1  className="text-white">compared to other petroleum-based </h1>
         <h1  className="text-white">fuels(gasoline).</h1>
       </div>
       </div>
       <div className=" flex pl-4 mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-white size-6">
          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
         </svg>
          <div>
        <h1  className="text-white">Cleaner, safe, non-toxic and non-corrosive fuel. 
        </h1>
       </div>
       </div>
       <div className=" flex pl-4 mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-white size-6">
          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
         </svg>
          <div>
        <h1  className="text-white">Lowers maintenance cost.</h1>
       </div>
       </div>
       <div className=" flex pl-4 mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-white size-6">
          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
         </svg>
          <div>
        <h1  className="text-white">Extended Machine Lifespan – Burns completely </h1>
        <h1 className="text-white">and does not build deposits in combustion </h1>
        <h1 className="text-white">chamber</h1>
       </div>
       </div>
       <div className=" flex pl-4 mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-white size-6">
          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
         </svg>
          <div>
        <h1  className="text-white">Reduction in Carbon dioxide (CO2) emission.</h1>
       </div>
       </div>
       </div>
         </div>
         <div className="col-span-5">
          <Image src={stock} width={681} alt="no img" className="mt-3"/>
         </div>
         </div>
          </div>
        </div>


       
      </div>
    </div>
  );
};

export default Solutions;
