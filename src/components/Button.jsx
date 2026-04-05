import React from "react";
import { useSelector } from "react-redux";

function Button({ name }) {
  const isDarkMode = useSelector((store) => store.theme.darkMode)
  return (
    <button
      className={`px-4 ${isDarkMode?"bg-gray-500 text-white":"bg-gray-200"}  shrink-0 py-2 m-2  text-gray-800 font-medium rounded-lg 
                 hover:bg-gray-300 hover:cursor-pointer active:bg-gray-400 transition-all duration-200`}
    >
      {name}
    </button>
  );
}

export default Button;
