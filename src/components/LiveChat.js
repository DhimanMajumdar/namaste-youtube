import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const [isAutoScroll, setIsAutoScroll] = useState(true);
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(10) + " 🚀",
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [dispatch]);

  useEffect(() => {
    if (isAutoScroll && chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages, isAutoScroll]);

  const handleScroll = () => {
    if (chatContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
      setIsAutoScroll(scrollTop + clientHeight >= scrollHeight - 10);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="m-4 -mr-14 p-2 text-white border border-white shadow-xl w-full max-w-2xl h-[500px] rounded-lg font-semibold bg-gradient-to-t from-gray-800 to-gray-600 shadow-slate-300">
        <div
          ref={chatContainerRef}
          onScroll={handleScroll}
          className="h-[450px] overflow-y-auto p-2 space-y-2"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style>
            {`
              ::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>
          {chatMessages.slice(-50).map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>

      {/* Input Form */}
      <form
        className="w-full max-w-2xl p-2 rounded-lg -mr-20 -mt-4 bg-gradient-to-b from-gray-800 to-gray-600 shadow-slate-300 shadow-lg flex items-center"
        onSubmit={(e) => {
          e.preventDefault();
          if (!liveMessage.trim()) return;
          dispatch(
            addMessage({
              name: "Dhiman",
              message: liveMessage,
            })
          );
          setLiveMessage("");
          setIsAutoScroll(true);
        }}
      >
        <input
          className="px-3 py-1 flex-1 border border-black rounded-md outline-none text-black"
          type="text"
          placeholder="Type your message..."
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-4 mx-2 bg-gray-900 text-white rounded-md hover:bg-black">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
