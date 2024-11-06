import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleIsMenuOpen = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex items-center col-span-1">
        <img
          onClick={toggleIsMenuOpen}
          className="h-8 cursor-pointer"
          alt="Menu"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
        />
        <a href="/" className="flex items-center">
          <img
            className="h-10 mx-2"
            alt="App-logo"
            src="https://wallpapers.com/images/featured/youtube-logo-background-xuljaasdgk44enmb.jpg"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 px-4 py-2 rounded-r-full bg-gray-100">
          🔎
        </button>
      </div>
      <div className="col-span-1 flex items-center justify-end">
        <img
          className="h-8"
          alt="User"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrBp4rAadRiXmk6NWl3redkvGJgWGDkBT4vA&s"
        />
      </div>
    </div>
  );
};

export default Head;
