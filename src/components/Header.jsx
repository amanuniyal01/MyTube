import React from "react";
import { Menu, Search, Mic, Bell } from "lucide-react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

function Header() {

    const dispatch = useDispatch()
    const toggleMenuHandler = () => {
        dispatch(toggleMenu())

    }

    return (
        <div className="flex justify-between items-center shadow-md px-4 py-2 bg-white">

            {/* Left Section: Menu + Logo */}
            <div className="flex items-center gap-4">
                <Menu onClick={() => toggleMenuHandler()} className="h-6 w-6 cursor-pointer" />
                <img
                    className="h-15"
                    alt="YouTube Logo"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgsKZUi9opgiAngq8jEISpzkg5CQCvKPajVn9ZxqcI1ImQE2jU89M5lHTbUEv05ZP0_ns&usqp=CAU"
                />
            </div>

            {/* Middle Section: Search Bar */}
            <div className="flex items-center w-1/2">
                <input
                    className="  font-[600] md:flex-grow md:border md:border-gray-300 md:rounded-l-full md:px-6 md:py-2  md:outline-none md:text-gray-800"
                    type="text"
                    placeholder="Search"
                />
                <button className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-r-full hover:bg-gray-200">
                    <Search className="h-6 w-5" />
                </button>
                <button className="ml-3 p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                    <Mic className="md:h-5 md:w-5 " />
                </button>
            </div>

            {/* Right Section: Notification + User */}
            <div className="flex items-center gap-4">
                <Bell className="md:h-6 md:w-6 md:cursor-pointer " />
                <img
                    className="h-8 w-8 rounded-full cursor-pointer"
                    alt="User"
                    src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
                />
            </div>
        </div>
    );
}

export default Header;
