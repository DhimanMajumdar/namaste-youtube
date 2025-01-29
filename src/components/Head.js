import React from "react";
import logo from "../assets/logo.png";
import menuIcon from "../assets/menu.jpg";
import userIcon from '../assets/userIcon.png'

const Head = () => {
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img className="h-8" alt="menu" src={menuIcon} />
        <img className="h-8 mx-2" src={logo} alt="VibeStream Logo" />
      </div>
      <div className="col-span-10 px-10">
        <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text"/>
        <button className="border border-gray-400 py-2 rounded-r-full px-5 bg-gray-100">🔍</button>
      </div>
      <div className="col-span-1">
        <img className="h-8" src={userIcon} alt="userIcon Logo"/>
      </div>
    </div>
  );
};

export default Head;
