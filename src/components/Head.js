import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import menuIcon from "../assets/menu.jpg";
import userIcon from "../assets/userIcon.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setShowSuggestions(false);
      return;
    }

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
        setShowSuggestions(true);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    if (searchQuery.trim() === "") return;

    console.log("API CALL: " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    if (json[1].length > 0) {
      setShowSuggestions(true);
    }

    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg bg-gradient-to-r from-black to-gray-800 text-white">
      {/* Left Side - Menu & Logo */}
      <div className="flex col-span-1">
        <img
          onClick={toggleMenuHandler}
          className="h-8 cursor-pointer"
          alt="menu"
          src={menuIcon}
        />
        <img
          className="h-10 mx-2 cursor-pointer w-44"
          src={logo}
          alt="DEVTUBE Logo"
        />
      </div>

      {/* Search Bar */}
      <div className="col-span-10 px-10">
        <div>
          <input
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full text-black"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => searchQuery.length > 0 && setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 py-2 rounded-r-full px-5 bg-gray-100 cursor-pointer">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white text-black py-2 px-2 w-[30.5rem] shadow-lg rounded-xl border-gray-100 mt-1 ml-2">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍{s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      
      <div className="col-span-1 flex items-center space-x-2">
        <img className="h-8 cursor-pointer" src={userIcon} alt="userIcon Logo" />
        <span className="text-sm font-semibold">Dhiman Majumdar</span>
      </div>
    </div>
  );
};

export default Head;
