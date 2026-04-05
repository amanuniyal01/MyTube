import React from "react";
import { useSelector } from "react-redux";

function Comment({ data }) {
  const { Name, text } = data;
  const isDarkMode = useSelector((store) => store.theme.darkMode);

  return (
    <div
      className={`flex gap-3 p-3 mt-5 rounded-lg transition 
      ${isDarkMode ? "bg-gray-500" : "bg-gray-300/60"}`}
    >
      <img
        className="h-10 w-10 rounded-full"
        alt="User"
        src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
      />

      <div>
        <h1
          className={`font-semibold ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          {Name}
        </h1>

        <p
          className={`text-sm ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

export default Comment;