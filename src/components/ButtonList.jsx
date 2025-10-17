import React from "react";
import Button from "./Button";

function ButtonList() {
  const categories = [
    "All",
    "Music",
    "Live",
    "Gaming",
    "News",
    "Movies",
    "Cricket",
    "Technology",
    "Recently Uploaded",
  
    "Javascript"
  ];

  return (
    <div className="flex mt-20 overflow-x-auto whitespace-nowrap no-scrollbar p-2 bg-white">
      {categories.map((name, index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  );
}

export default ButtonList;
