import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";

const MainMovieInfo = ({ info }) => {
  const { original_title, overview } = info;
  return (
    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent">
      <div className="absolute top-[30%] mx-10 w-2/6 text-white">
        <div className="flex flex-col mx-10">
          <h1 className="text-5xl font-bold">{original_title}</h1>
          <p className="text-md my-2">{overview}</p>
          <div className="flex flex-row mx-10 my-5">
            <button className="bg-white text-black px-6 py-2 font-bold rounded-md transition-colors duration-200 hover:bg-gray-200">
              <div className="flex items-center">
                <FaPlay size={20} className="pr-2" /> Play
              </div>
            </button>
            <button className="bg-gray-600 text-white px-6 py-2 font-bold rounded-md transition-colors duration-200 hover:bg-gray-700 ml-4">
              <div className="flex items-center">
                <IoInformationCircle size={25} className="pr-2" /> More Info
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMovieInfo;
