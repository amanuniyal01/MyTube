import React, { useEffect, useState } from "react";
import { Menu, Search, Mic, Bell } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { cacheResults } from "../utils/SearchSlice";
import { Link, useNavigate } from "react-router-dom";
import { LANGUAGE_OPTION } from "../utils/constant";
import { changeLanguage } from "../utils/configSlice";
import language from "../utils/language";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { clearUser } from "../utils/UserSlice";
import { toggleTheme } from "../utils/ThemeSlice";

function Header() {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const searchCache = useSelector((store) => store.search);
    const langKey = useSelector((store) => store.config.lang);
    const user = useSelector((store) => store.user);
    const theme = useSelector((store) => store.theme.dark)

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [clickUser, setClickUser] = useState(false);

    const handleSearch = () => {
        if (!searchQuery.trim()) return;
        navigate("/results?q=" + searchQuery);
        setSearchQuery("");
    };

    const setSignoutDropDown = () => {
        setClickUser(!clickUser);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    const toggleMenuHandler = () => {
        setTimeout(() => {
            dispatch(toggleMenu());
        }, 300);
    };
    const handleDarkMode = () => {
        dispatch(toggleTheme)

    }
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
        <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-3 md:px-4 py-2 bg-white border-b border-gray-200 shadow-sm h-14">

            {/* LEFT — Hamburger + Logo */}
            <div className="flex items-center gap-1 md:gap-3 flex-shrink-0">
                <button
                    onClick={toggleMenuHandler}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-150"
                    aria-label="Toggle menu"
                >
                    <Menu className="h-5 w-5 text-gray-700" />
                </button>
                <Link to="/" className="flex items-center">
                    <img
                        className="h-5 md:h-[50px]"
                        alt="YouTube Logo"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgsKZUi9opgiAngq8jEISpzkg5CQCvKPajVn9ZxqcI1ImQE2jU89M5lHTbUEv05ZP0_ns&usqp=CAU"
                    />
                </Link>
            </div>

            {/* CENTER — Search Bar */}
            <div className="relative flex items-center flex-1 mx-4 md:mx-8 max-w-[600px]">
                <div className="flex flex-1 items-center border border-gray-300 rounded-full overflow-visible shadow-inner focus-within:border-blue-500 focus-within:shadow-[0_0_0_1px_#3b82f6] transition-all duration-150">
                    <input
                        className="flex-1 px-4 md:px-5 py-2 bg-transparent outline-none text-gray-900 text-sm md:text-[15px] placeholder-gray-400 min-w-0"
                        type="text"
                        placeholder={language[langKey]?.search || "Search"}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                        onKeyDown={handleKeyDown}
                    />
                    <button
                        onClick={handleSearch}
                        className="px-4 md:px-5 py-2 bg-gray-100 border-l border-gray-300 hover:bg-gray-200 transition-colors duration-150 rounded-r-full flex items-center justify-center"
                        aria-label="Search"
                    >
                        <Search className="h-5 w-5 text-gray-600" />
                    </button>
                </div>

                <button
                    className="ml-2 md:ml-3 p-2.5 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-150 flex-shrink-0"
                    aria-label="Voice search"
                >
                    <Mic className="h-4 w-4 md:h-5 md:w-5 text-gray-700" />
                </button>


                {showSuggestions && suggestions.length > 0 && (
                    <div className="absolute top-[calc(100%+6px)] left-0 w-[calc(100%-52px)] bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50 max-h-72 overflow-y-auto">
                        <ul>
                            {suggestions.map((s) => (
                                <li
                                    key={s}
                                    onMouseDown={() => setSearchQuery(s)}
                                    className="flex items-center gap-3 hover:bg-gray-100 cursor-pointer px-4 py-2 text-sm md:text-[14px] text-gray-800 transition-colors duration-100"
                                >
                                    <Search className="h-4 w-4 text-gray-400 flex-shrink-0" />
                                    <span>{s}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>


            <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
                <button onClick={handleDarkMode} className="">
                    {theme?"Aman":"anu"}

                </button>

                {/* Language Selector */}
                <div className="hidden sm:block">
                    <select
                        value={langKey}
                        onChange={(e) => dispatch(changeLanguage(e.target.value))}
                        className="cursor-pointer rounded-full border border-gray-300 bg-white px-3 py-1.5 text-xs md:text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-150 outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                    >
                        {LANGUAGE_OPTION.map((lang) => (
                            <option key={lang.identifier} value={lang.identifier}>
                                {lang.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Bell */}
                <button
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-150"
                    aria-label="Notifications"
                >
                    <Bell className="h-5 w-5 md:h-6 md:w-6 text-gray-700" />
                </button>

                {/* User Avatar / Sign In */}
                {user ? (
                    <div className="relative">
                        <button
                            onClick={setSignoutDropDown}
                            className="h-8 w-8 rounded-full bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center font-bold text-sm transition-colors duration-150 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-1"
                            aria-label="User menu"
                        >
                            {user.name?.charAt(0).toUpperCase()}
                        </button>

                        {clickUser && (
                            <div className="absolute right-0 top-10 bg-white shadow-xl rounded-xl p-3 w-40 z-50 border border-gray-100 animate-in fade-in slide-in-from-top-1 duration-150">
                                <p className="text-sm font-semibold text-gray-800 mb-2 truncate">{user.name}</p>
                                <hr className="border-gray-100 mb-2" />
                                <button
                                    onClick={() => {
                                        signOut(auth);
                                        dispatch(clearUser());
                                    }}
                                    className="w-full text-left px-2 py-1.5 text-xs text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors duration-150 font-medium"
                                >
                                    Sign Out
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <Link to="/login">
                        <button className="flex items-center gap-1.5 px-3 md:px-4 py-1.5 md:py-2 border border-blue-500 text-blue-600 rounded-full text-xs md:text-sm font-semibold hover:bg-blue-50 transition-colors duration-150">
                            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                            </svg>
                            Sign In
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
}

export default Header;
