import React from "react";

function Button({ name }) {
  return (
    <button
      className="px-4 shrink-0 py-2 m-2 bg-gray-200 text-gray-800 font-medium rounded-lg 
                 hover:bg-gray-300 hover:cursor-pointer active:bg-gray-400 transition-all duration-200"
    >
      {name}
    </button>
  );
}

export default Button;
