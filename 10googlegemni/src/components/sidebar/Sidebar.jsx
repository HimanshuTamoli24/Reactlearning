import React, { useState } from "react";
import { assets } from "../../assets/gemini-clone-assets/assets/assets";

function Sidebar() {
  const [extended, setExtended] = useState(false);

  return (
    <div className="pl-4 sidebar  pr-4 min-h-screen flex flex-col justify-between bg-[#f0f3f8]">
      <div className="top ml-3">
        <img
          onClick={() => setExtended(!extended)}
          className="w-5 block mt-[25px] ml-[10px] cursor-pointer"
          src={assets.menu_icon}
          alt="Menu Icon"
        />
        <div className="mt-[50px] inline-flex items-center gap-[10px] bg-slate-200 new-chat rounded-[70px] text-xl text-gray-800 cursor-pointer p-2">
          <img
            className=" relative  w-7 h-7  bg-gray-200 hover:bg-gray-400 transition-colors duration-300 cursor-pointer rounded-full block "
            src={assets.plus_icon}
            alt="Plus Icon"
          />
          {extended ? <p>New chat</p> : null}
        </div>

        {extended && (
          <div className="recent flex flex-col">
            <p className="recent-title mt-8 mb-5">Recent</p>
            <div className="recent-entry flex items-start gap-[10px] p-[10px] pr-10 rounded-[50px] text-gray-700 cursor-pointer hover:bg-gray-400">
              <img
                className="w-5 block  "
                src={assets.message_icon}
                alt="Message Icon"
              />
              <p>What is React?</p>
            </div>
          </div>
        )}
      </div>
      <div className="bottom flex-col flex mb-8 ml-2">
        <div className="bottom-item mb-4 pr-[10px] cursor-pointer flex items-center gap-[10px]">
          <div className="relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-400 transition-colors duration-300 cursor-pointer">
            <img
              className="w-6 h-6"
              src={assets.question_icon}
              alt="Help Icon"
            />
          </div>
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item mb-4 pr-[10px] cursor-pointer flex items-center gap-[10px]">
          <div className="relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-400 transition-colors duration-300 cursor-pointer">
            <img
              className="w-6 h-6"
              src={assets.history_icon}
              alt="History Icon"
            />
          </div>
          {extended ? <p>Activities</p> : null}
        </div>
        <div className="bottom-item pr-[10px] cursor-pointer flex items-center gap-[10px]">
          <div className="relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-400 transition-colors duration-300 cursor-pointer">
            <img
              className="w-6 h-6"
              src={assets.setting_icon}
              alt="Settings Icon"
            />
          </div>
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
