import React from "react";
import Button from "./Button";
import language from "../utils/language";
import { useSelector } from "react-redux";
function ButtonList() {
  const langKey = useSelector((store) => store.config.lang)
  const categories = language[langKey].categories


  return (
    <div className="flex mt-20 ml-10 overflow-x-auto whitespace-nowrap p-2 bg-white scrollbar-hide">
      {categories.map((name, index) => (
        <Button key={index} name={name} />
      ))}
    </div>

  );
}

export default ButtonList;
