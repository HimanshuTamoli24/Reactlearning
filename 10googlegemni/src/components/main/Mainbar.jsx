import React from "react";
import { assets } from "../../assets/gemini-clone-assets/assets/assets";

function Mainbar() {
  return (
    <div className="flex-1  flex flex-col min-h-screen pb-[15px] main relative">
      <div className=" flex items-center justify-between text-[23px] ml-2  p-4  text-[#585858] ">
        <p>Gemini</p>
        <img
          className="w-10 rounded-full"
          src={assets.user_icon}
          alt="User Icon"
        />
      </div>
      <div className="main-container flex-1 max-w-4xl m-auto">
        <div className="greet mt-12 text-6xl text-slate-200 font-bold p-5">
          <p>
            <span className="bg-gradient-to-b from-blue-500 to-red-500 bg-[length:200%_200%] bg-clip-text text-transparent">
              hello, dev
            </span>
          </p>
          <p>how can i help you today?</p>
        </div>

        <div className="grid grid-cols-4 gap-4 p-5">
          {" "}
          {/* Changed to 4 columns */}
          <div className="card border-2 p-[15px] bg-[#f0f3f8]  rounded-xl relative cursor-pointer hover:bg-gray-200">
            <p className="text-gray-600 text-[17px]">
              ideas to surprise a friend on their birthday
            </p>
            <img
              className="w-6 bg-slate-100 rounded-3xl absolute bottom-4 right-4"
              src={assets.compass_icon}
              alt="Compass Icon"
            />
          </div>
          <div className="card border-2 p-[15px] bg-[#f0f3f8]  rounded-xl relative cursor-pointer hover:bg-gray-200">
            <p className="text-gray-600 text-[17px]">
              Create a futuristic image of a car
            </p>
            <img
              className="w-6 bg-slate-100 rounded-3xl absolute bottom-4 right-4"
              src={assets.bulb_icon}
              alt="Bulb Icon"
            />
          </div>
          <div className="card border-2 h-56 p-[15px] bg-[#f0f3f8]  rounded-xl relative cursor-pointer hover:bg-gray-200">
            <p className="text-gray-600 text-[17px]">
              how weather changes over the years
            </p>
            <img
              className="w-6 bg-slate-100 rounded-3xl absolute bottom-4 right-4"
              src={assets.message_icon}
              alt="Message Icon"
            />
          </div>
          <div className="card border-2 p-[15px] bg-[#f0f3f8]  rounded-xl relative cursor-pointer hover:bg-gray-200">
            <p className="text-gray-600 text-[17px]">
              how long to learn web development
            </p>
            <img
              className="w-6 bg-slate-100 rounded-3xl absolute bottom-4 right-4"
              src={assets.code_icon}
              alt="Code Icon"
            />
          </div>
        </div>

        <div className="main-bottom absolute bottom-0 max-w-4xl w-full ">
          <div className="search-box bg-[#f0f3f8] flex border-2 items-center justify-between gap-5 rounded-full ">
            <input
              type="text"
              placeholder="Enter a prompt here"
              className="flex-1 border-none bg-[#f0f3f8] focus:outline-none m-4 text-xl"
              aria-label="Prompt Input"
            />
            <div className="flex items-center gap-4">
              <img
                src={assets.gallery_icon}
                alt="Gallery Icon"
                className="w-6 cursor-pointer"
              />
              <img
                src={assets.mic_icon}
                alt="Mic Icon"
                className="w-6 cursor-pointer"
              />
              <img
                src={assets.send_icon}
                alt="Send Icon"
                className="w-6 mr-2 cursor-pointer"
              />
            </div>
          </div>
          <p className="bottom-info text-sm m-4 text-center font-thin">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mainbar;
