const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center bg-gray-900 p-2 rounded-lg shadow">
      <img
        className="h-8 w-8 rounded-full"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <span className="font-bold px-2">{name}:</span>
      <span className="text-gray-300">{message}</span>
    </div>
  );
};

export default ChatMessage;
