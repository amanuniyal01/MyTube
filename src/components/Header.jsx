import React, { useEffect, useState } from "react";
import { Menu, Search, Mic, Bell, X } from "lucide-react";
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
import logo from "../images/myTube-logo.png";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [clickUser, setClickUser] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const langKey = useSelector((store) => store.config.lang);
  const user = useSelector((store) => store.user);
  const isDarkMode = useSelector((store) => store.theme.darkMode);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    navigate("/results?q=" + searchQuery);
    setSearchQuery("");
    setShowMobileSearch(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const toggleMenuHandler = () => {
    setTimeout(() => dispatch(toggleMenu()), 300);
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

  const dark = isDarkMode;

  return (
    <>
      {/* ── MAIN HEADER ── */}
      <header
        className={`fixed top-0 left-0 w-full z-50 h-14 flex items-center px-3 md:px-4 gap-2
          ${dark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"}
          border-b shadow-sm transition-colors duration-200`}
      >
        {/* ── LEFT: Hamburger + Logo ── */}
        <div className="flex items-center gap-1 flex-shrink-0">
          <button
            onClick={toggleMenuHandler}
            className={`p-2 rounded-full transition-colors duration-150
              ${dark ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
            aria-label="Toggle menu"
          >
            <Menu className={`h-5 w-5 ${dark ? "text-white" : "text-gray-800"}`} />
          </button>

          <Link to="/" className="flex items-center">
            <img
              className="h-6 sm:h-7 md:h-8 w-auto object-contain"
              alt="MyTube Logo"
              src={logo}
            />
          </Link>
        </div>

        {/* ── CENTER: Search (hidden on mobile, visible md+) ── */}
        <div className="relative hidden md:flex items-center flex-1 max-w-[560px] mx-auto">
          <div
            className={`flex flex-1 items-center border rounded-full overflow-visible shadow-inner
              focus-within:shadow-[0_0_0_1.5px_#3b82f6] transition-all duration-150
              ${dark
                ? "border-gray-600 bg-gray-800 focus-within:border-blue-400"
                : "border-gray-300 bg-white focus-within:border-blue-500"
              }`}
          >
            <input
              className={`flex-1 px-4 py-2 bg-transparent outline-none text-sm md:text-[15px] min-w-0
                ${dark ? "text-white placeholder-gray-400" : "text-gray-900 placeholder-gray-400"}`}
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
              className={`px-4 py-2 border-l rounded-r-full flex items-center justify-center transition-colors duration-150
                ${dark
                  ? "border-gray-600 bg-gray-700 hover:bg-gray-600"
                  : "border-gray-300 bg-gray-100 hover:bg-gray-200"
                }`}
              aria-label="Search"
            >
              <Search className={`h-5 w-5 ${dark ? "text-gray-300" : "text-gray-600"}`} />
            </button>
          </div>

          <button
            className={`ml-2 p-2.5 rounded-full flex-shrink-0 transition-colors duration-150
              ${dark ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-100 hover:bg-gray-200"}`}
            aria-label="Voice search"
          >
            <Mic className={`h-5 w-5 ${dark ? "text-gray-300" : "text-gray-700"}`} />
          </button>

          {/* Desktop Suggestions */}
          {showSuggestions && suggestions.length > 0 && (
            <div
              className={`absolute top-[calc(100%+6px)] left-0 w-[calc(100%-52px)] rounded-xl shadow-xl border py-2 z-50 max-h-72 overflow-y-auto
                ${dark ? "bg-gray-800 border-gray-600" : "bg-white border-gray-200"}`}
            >
              <ul>
                {suggestions.map((s) => (
                  <li
                    key={s}
                    onMouseDown={() => setSearchQuery(s)}
                    className={`flex items-center gap-3 cursor-pointer px-4 py-2 text-sm transition-colors duration-100
                      ${dark
                        ? "text-gray-200 hover:bg-gray-700"
                        : "text-gray-800 hover:bg-gray-100"
                      }`}
                  >
                    <Search className="h-4 w-4 text-gray-400 flex-shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* ── RIGHT: Actions ── */}
        <div className="flex items-center gap-1 sm:gap-2 ml-auto flex-shrink-0">

          {/* Mobile search icon (visible below md) */}
          <button
            onClick={() => setShowMobileSearch(true)}
            className={`md:hidden p-2 rounded-full transition-colors duration-150
              ${dark ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
            aria-label="Open search"
          >
            <Search className={`h-5 w-5 ${dark ? "text-white" : "text-gray-700"}`} />
          </button>

          {/* Dark mode toggle — icon only on xs, icon+label on sm+ */}
          <button
            onClick={() => dispatch(toggleTheme())}
            className={`flex items-center gap-1 px-2 sm:px-3 py-1.5 rounded-full border text-xs font-semibold transition-colors duration-200
              ${dark
                ? "bg-gray-800 border-gray-600 text-yellow-300 hover:bg-gray-700"
                : "bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200"
              }`}
            aria-label="Toggle theme"
          >
            <span className="text-sm">{dark ? "🌙" : "☀️"}</span>
            <span className="hidden sm:inline">{dark ? "Dark" : "Light"}</span>
          </button>

       
          <select
            value={langKey}
            onChange={(e) => dispatch(changeLanguage(e.target.value))}
            className={`hidden sm:block cursor-pointer rounded-full border px-2 md:px-3 py-1.5 text-xs md:text-sm font-medium outline-none
              transition-colors duration-150 focus:ring-2 focus:ring-blue-400 focus:border-transparent
              ${dark
                ? "bg-gray-800 border-gray-600 text-gray-200 hover:bg-gray-700"
                : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
          >
            {LANGUAGE_OPTION.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>

          {/* Bell — hidden on xs */}
          <button
            className={`hidden sm:flex p-2 rounded-full transition-colors duration-150
              ${dark ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
            aria-label="Notifications"
          >
            <Bell className={`h-5 w-5 ${dark ? "text-white" : "text-gray-700"}`} />
          </button>

          {/* User avatar / Sign in */}
          {user ? (
            <div className="relative">
              <button
                onClick={() => setClickUser(!clickUser)}
                className="h-8 w-8 rounded-full bg-purple-600 hover:bg-purple-700 text-white flex items-center justify-center font-bold text-sm transition-colors duration-150 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-1"
                aria-label="User menu"
              >
                {user.name?.charAt(0).toUpperCase()}
              </button>

              {clickUser && (
                <div
                  className={`absolute right-0 top-10 shadow-xl rounded-xl p-3 w-44 z-50 border
                    ${dark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"}`}
                >
                  <p className={`text-sm font-semibold mb-2 truncate ${dark ? "text-gray-100" : "text-gray-800"}`}>
                    {user.name}
                  </p>
                  <hr className={`mb-2 ${dark ? "border-gray-600" : "border-gray-100"}`} />
                  <button
                    onClick={() => {
                      signOut(auth);
                      dispatch(clearUser());
                      setClickUser(false);
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
              <button
                className={`flex items-center gap-1.5 px-3 py-1.5 border rounded-full text-xs sm:text-sm font-semibold transition-colors duration-150
                  ${dark
                    ? "text-white bg-transparent border-gray-400 hover:bg-gray-700"
                    : "text-blue-600 border-blue-500 hover:bg-blue-50"
                  }`}
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                </svg>
                <span className="hidden xs:inline">Sign In</span>
              </button>
            </Link>
          )}
        </div>
      </header>

      {/* ── MOBILE SEARCH OVERLAY (slides down on mobile) ── */}
      {showMobileSearch && (
        <div
          className={`fixed top-0 left-0 w-full z-[60] h-14 flex items-center px-3 gap-2
            ${dark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"}
            border-b shadow-md md:hidden`}
        >
          <div
            className={`flex flex-1 items-center border rounded-full overflow-visible shadow-inner
              focus-within:shadow-[0_0_0_1.5px_#3b82f6] transition-all duration-150
              ${dark
                ? "border-gray-600 bg-gray-800 focus-within:border-blue-400"
                : "border-gray-300 bg-white focus-within:border-blue-500"
              }`}
          >
            <input
              autoFocus
              className={`flex-1 px-4 py-2 bg-transparent outline-none text-sm min-w-0
                ${dark ? "text-white placeholder-gray-400" : "text-gray-900 placeholder-gray-400"}`}
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
              className={`px-4 py-2 border-l rounded-r-full flex items-center justify-center transition-colors duration-150
                ${dark
                  ? "border-gray-600 bg-gray-700 hover:bg-gray-600"
                  : "border-gray-300 bg-gray-100 hover:bg-gray-200"
                }`}
            >
              <Search className={`h-5 w-5 ${dark ? "text-gray-300" : "text-gray-600"}`} />
            </button>
          </div>

          <button
            onClick={() => {
              setShowMobileSearch(false);
              setSearchQuery("");
              setSuggestions([]);
            }}
            className={`p-2 rounded-full flex-shrink-0 transition-colors duration-150
              ${dark ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
            aria-label="Close search"
          >
            <X className={`h-5 w-5 ${dark ? "text-white" : "text-gray-700"}`} />
          </button>

          {/* Mobile Suggestions */}
          {showSuggestions && suggestions.length > 0 && (
            <div
              className={`absolute top-14 left-0 w-full rounded-b-xl shadow-xl border-x border-b py-2 z-50 max-h-72 overflow-y-auto
                ${dark ? "bg-gray-800 border-gray-600" : "bg-white border-gray-200"}`}
            >
              <ul>
                {suggestions.map((s) => (
                  <li
                    key={s}
                    onMouseDown={() => {
                      setSearchQuery(s);
                      setShowSuggestions(false);
                    }}
                    className={`flex items-center gap-3 cursor-pointer px-4 py-2 text-sm transition-colors duration-100
                      ${dark
                        ? "text-gray-200 hover:bg-gray-700"
                        : "text-gray-800 hover:bg-gray-100"
                      }`}
                  >
                    <Search className="h-4 w-4 text-gray-400 flex-shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Header;
