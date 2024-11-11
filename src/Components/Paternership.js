import Image from "next/image";
import React from "react";
import frame from "../Components/Images/Frame.png";
import circles from "../Components/Images/Circles.svg"

const Paternership = () => {
  return (
    <div>
      <div className="grid place-items-center">
        <div className="flex gap-1 mt-28 text-gray-600 ">
         <Image src={circles} alt="no img"/>
          <h1 className="text-5xl font-bold">Why Weston Energy </h1>
        </div>
       
        <div className="grid grid-cols-10 mt-9">
          <div className="col-span-5 px-12">
            <Image src={frame} alt="no img" />
          </div>
          <div className="col-span-5 mt-10 px-8">
            <div>
              <div className="flex gap-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className=" text-gray-400 size-6"
                >
                  <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                  <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                </svg>
                <h1 className="font-bold">Zero Capital Expenditure (CapEx)</h1>
              </div>
              <p className="text-gray-500 mt-3 pl-7">
                We provide Gas Recieving Facilities at no upfront cost to you,
                eliminating capital expenses and lowering your financial
                barriers
              </p>
              <p className="border border-slate-200 mt-3"></p>
            </div>
            <div>
              <div className="flex gap-5 mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className=" text-gray-400 size-6"
                >
                  <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
                  <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
                  <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
                </svg>
                <h1 className="font-bold">
                  Retrolifting Services for Equipmemnt and Vehicles
                </h1>
              </div>
              <p className="text-gray-500 mt-3 pl-7">
                We offer expert retrofitting solutions, transforming your
                industrial equipment and vehicles to utilize natural gas, making
                the transition to cleaner energy hassle-free
              </p>
              <p className="border border-slate-200 mt-3"></p>
            </div>
            <div>
              <div className="flex gap-5 mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className=" text-gray-400 size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z"
                    clipRule="evenodd"
                  />
                </svg>
                <h1 className="font-bold">Reliable and Safe Supply Chain</h1>
              </div>
              <p className="text-gray-500 mt-3 pl-7">
                With a focus on safety and consistency, Weston Energy ensures a
                continuous supply of natural gas to keep your operations running
                smoothly
              </p>
              <p className="border border-slate-200 mt-3"></p>
            </div>
            <div>
              <div className="flex gap-5 mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-gray-400 size-6"
                >
                  <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                </svg>

                <h1 className="font-bold">Cost Savings on Fuel</h1>
              </div>
              <p className="text-gray-500 mt-3 pl-7">
                Save 10-30% on fuel costs compared to traditional fossil fuels,
                maximizing your budget and lowering operational expenses
              </p>
              <p className="border border-slate-200 mt-3"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paternership;
