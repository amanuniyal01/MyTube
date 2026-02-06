import React, { useEffect, useState } from "react";
import { Menu, Search, Mic, Bell } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/SearchSlice";
import { Link } from "react-router-dom";
import { LANGUAGE_OPTION } from "../utils/constant";
import { changeLanguage } from "../utils/configSlice";
import language from "../utils/language";
function Header() {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false)

    const searchCache = useSelector((store) => store.search)
    const langKey = useSelector((store) => store.config.lang)



    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {

                setSuggestions(searchCache[searchQuery]);
            } else {

                getSearchSuggestions();
            }
        }, 200);

        return () => clearTimeout(timer);
    }, [searchQuery]);


    const getSearchSuggestions = async () => {
        if (!searchQuery) {
            setSuggestions([]);
            return;
        }

        try {
            const response = await fetch(
                `https://api.allorigins.win/get?url=${encodeURIComponent(
                    YOUTUBE_SEARCH_API + searchQuery
                )}`
            );

            const data = await response.json();
            const parsed = JSON.parse(data.contents);
            console.log(parsed);
            setSuggestions(parsed[1]);
        } catch (err) {
            console.error("Error fetching search suggestions:", err);
        }
        dispatch(cacheResults({
            [searchQuery]: json[1]
        }))
    };
    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value))

    }


    return (
        <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center shadow-lg px-4 py-2 bg-white">

            <div className="flex items-center gap-4">
                <Menu onClick={toggleMenuHandler} className="h-6 w-6 cursor-pointer" />
                <Link to="/">
                    <img
                        className="h-10"
                        alt="YouTube Logo"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgsKZUi9opgiAngq8jEISpzkg5CQCvKPajVn9ZxqcI1ImQE2jU89M5lHTbUEv05ZP0_ns&usqp=CAU"
                    />
                </Link>

            </div>


            <div className="relative flex items-center w-1/2">
                <input
                    className="font-[600] flex-grow border-2 border-gray-300 rounded-l-full px-6 py-2 outline-none text-gray-800"
                    type="text"
                    placeholder={language[langKey].search}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setShowSuggestions(false)}

                />
                <button className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-r-full hover:bg-gray-200">
                    <Search className="h-6 w-5" />
                </button>
                <button className="ml-3 p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                    <Mic className="h-5 w-5" />
                </button>



                {showSuggestions && (<div className="absolute top-12 left-0 w-162 bg-white rounded-xl shadow-lg border border-gray-200 px-5 py-0 z-50">
                    <ul className="space-y-2">
                        {suggestions.map((s, i) => (
                            <li
                                key={i}
                                className="flex items-center gap-3 hover:bg-gray-100 cursor-pointer px-2 py-1 rounded-md"
                            >
                                <Search className="h-5 w-5 text-gray-500" />
                                <span>{s}</span>
                            </li>
                        ))}
                    </ul>
                </div>)}

            </div>
            <div className="relative">
                <select
                    value={langKey}
                    onChange={(e) => dispatch(changeLanguage(e.target.value))}
                    className="  appearance-none  cursor-pointer  rounded-full  border border-gray-300  bg-white  px-4 py-1.5 pr-8  text-sm font-medium text-gray-800  hover:bg-gray-100  focus:outline-none focus:ring-2 focus:ring-gray-300"        >
                    {LANGUAGE_OPTION.map((lang) => (
                        <option className="rounded-lg" key={lang.identifier} value={lang.identifier}>
                            {lang.name}
                        </option>
                    ))}
                </select>

                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs">
                    ▼
                </span>
            </div>
            {/* Right Section */}
            <div className="flex items-center gap-4">
                <Bell className="h-6 w-6 cursor-pointer" />
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
