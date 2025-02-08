import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());

    // Change background color to pink
    document.body.classList.add(
      "bg-gradient-to-r",
      "from-gray-800",
      "to-black"
    );

    // Reset background color when leaving the page
    return () => {
      document.body.style.backgroundColor = ""; // Resets to default
    };
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="px-5 rounded-3xl flex w-full">
        <div>
          <iframe
            width="1100"
            height="500"
            src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full -mt-4 mr-6">
          <LiveChat />
        </div>
      </div>
      <h1 className="font-extrabold text-white text-2xl  mt-3 mx-6 mb-2">
        Comments:
      </h1>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
