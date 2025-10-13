import React from "react";

function Button({ name }) {
  return (
    <button
      className="px-4 py-2 m-2 bg-gray-200 text-gray-800 font-medium rounded-lg 
                 hover:bg-gray-300 active:bg-gray-400 transition-all duration-200"
    >
      {name}
    </button>
  );
}

export default Button;
