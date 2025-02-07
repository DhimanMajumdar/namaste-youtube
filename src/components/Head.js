import React, { use } from "react";
import logo from "../assets/logo.png";
import menuIcon from "../assets/menu.jpg";
import userIcon from '../assets/userIcon.png'
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch=useDispatch();
  const toggleMenuHandler=()=>{
    dispatch(toggleMenu());
  }
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg bg-gradient-to-r from-black to-gray-800 text-white">
      <div className="flex col-span-1">
        <img onClick={()=>toggleMenuHandler()} className="h-8 cursor-pointer" alt="menu" src={menuIcon} />
        <img className="h-10 mx-2 cursor-pointer w-44" src={logo} alt="DEVTUBE Logo" />
      </div>
      <div className="col-span-10 px-10">
        <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text"/>
        <button className="border border-gray-400 py-2 rounded-r-full px-5 bg-gray-100 cursor-pointer">🔍</button>
      </div>
      <div className="col-span-1 text-white">
        <img className="h-8 cursor-pointer" src={userIcon} alt="userIcon Logo"/>
      </div>
    </div>
  );
};

export default Head;
