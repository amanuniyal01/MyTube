import React, { useEffect, useState } from "react";
import { Menu, Search, Mic, Bell } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { cacheResults } from "../utils/SearchSlice";
import { Link, useNavigate } from "react-router-dom";
import { LANGUAGE_OPTION } from "../utils/constant";
import { changeLanguage } from "../utils/configSlice";
import language from "../utils/language";
import { auth } from "../utils/firebase"; //
import { signOut } from "firebase/auth"; // 
import { clearUser } from "../utils/userSlice"; // 

function Header() {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const searchCache = useSelector((store) => store.search);
    const langKey = useSelector((store) => store.config.lang);
    const user = useSelector((store) => store.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [clickUser, setClickUser] = useState(false)

    const handleSearch = () => {
        if (!searchQuery.trim()) return;
        navigate("/results?q=" + searchQuery);
        setSearchQuery("");
    };
    const setSignoutDropDown = () => {
        setClickUser(!clickUser)
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    const toggleMenuHandler = () => {
        setTimeout(() => {
            dispatch(toggleMenu());
        }, 300)
    };

    useEffect(() => {
        if (!searchQuery) {
            setSuggestions([]);
            return;
        }

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
        try {
            const response = await fetch(
                "http://localhost:3000/api/suggest?q=" + searchQuery
            );
            const data = await response.json();
            setSuggestions(data[1]);
            dispatch(cacheResults({ [searchQuery]: data[1] }));
        } catch (err) {
            console.error("Suggestion fetch error:", err);
        }
    };

    return (
        <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center shadow-lg px-2 md:px-4 py-2 bg-white">

            {/* LEFT */}
            <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
                <Menu
                    onClick={toggleMenuHandler}
                    className="h-5 w-5 md:h-6 md:w-6 cursor-pointer"
                />
                <Link to="/">
                    <img
                        className="h-6 md:h-10"
                        alt="Logo"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgsKZUi9opgiAngq8jEISpzkg5CQCvKPajVn9ZxqcI1ImQE2jU89M5lHTbUEv05ZP0_ns&usqp=CAU"
                    />
                </Link>
            </div>

            {/* SEARCH */}
            <div className="relative flex items-center flex-1 mx-2 md:mx-6 max-w-[600px]">
                <input
                    className="w-full border-2 border-gray-300 rounded-l-full px-3 md:px-6 py-1.5 md:py-2 outline-none text-gray-800 text-sm md:text-base"
                    type="text"
                    placeholder={language[langKey].search}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                    onKeyDown={handleKeyDown}
                />
                <button
                    onClick={handleSearch}
                    className="px-2 md:px-4 py-1.5 md:py-2 bg-gray-100 border border-gray-300 rounded-r-full hover:bg-gray-200">
                    <Search className="h-6 w-4 md:h-6 md:w-5" />
                </button>
                <button className="ml-2 md:ml-3 p-1.5 md:p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                    <Mic className="h-4 w-4 md:h-5 md:w-5" />
                </button>

                {/* Suggestions */}
                {showSuggestions && (
                    <div className="absolute top-12 left-0 w-full bg-white rounded-xl shadow-lg border border-gray-200 px-3 md:px-5 py-0 z-50 max-h-72 overflow-y-auto">
                        <ul className="space-y-2">
                            {suggestions.map((s, i) => (
                                <li
                                    key={s}
                                    onMouseDown={() => setSearchQuery(s)}
                                    className="flex items-center gap-3 hover:bg-gray-100 cursor-pointer px-2 py-1 rounded-md text-sm md:text-base"
                                >
                                    <Search className="h-4 w-4 md:h-5 md:w-5 text-gray-500" />
                                    <span>{s}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* LANGUAGE */}
            <div className="relative hidden sm:block">
                <select
                    value={langKey}
                    onChange={(e) => dispatch(changeLanguage(e.target.value))}
                    className="appearance-none cursor-pointer rounded-full border border-gray-300 bg-white px-3 md:px-4 py-1 text-xs md:text-sm font-medium text-gray-800 hover:bg-gray-100"
                >
                    {LANGUAGE_OPTION.map((lang) => (
                        <option key={lang.identifier} value={lang.identifier}>
                            {lang.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
                <Bell className="h-5 w-5 md:h-6 md:w-6 cursor-pointer" />


                {user ? (
                    <div className="relative group">
                        {/* First letter avatar */}
                        <div onClick={setSignoutDropDown} className="h-8 w-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold cursor-pointer text-sm">
                            {user.name?.charAt(0).toUpperCase()}
                        </div>

                        {clickUser && (
                            <div className="absolute right-0 top-10 bg-white shadow-lg rounded-xl p-3 w-36 z-50 border border-gray-100">
                                <p className="text-sm font-medium text-gray-800 mb-2">{user.name}</p>
                                <button
                                    onClick={() => { signOut(auth); dispatch(clearUser()); }}
                                    className="p-2 text-xs text-red-500 hover:text-red-700"
                                >
                                    Sign Out
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <Link to="/login">
                        <button className="px-3 py-1.5 bg-red-600 text-white rounded-full text-xs font-medium hover:bg-purple-700">
                            Sign In
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
}

export default Header;