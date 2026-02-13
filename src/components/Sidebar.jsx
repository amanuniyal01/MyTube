import { Link } from "react-router-dom";
import {
    Home,
    Flame,
    PlaySquare,
    History,
    ListVideo,
    Video,
    Clock,
    ThumbsUp
} from "lucide-react";
import { useSelector } from "react-redux";
import language from "../utils/language";

const Sidebar = () => {

    const langKey = useSelector((store) => store.config.lang)
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);


    return !isMenuOpen ? null : (
        <div
            className=" z-30 md:mt-20 bg-white shadow-md transition-all h-full w-64 md:w-[15vw] min-w-[220px] p-3 md:p-4 fixed   left-0 top-0  overflow-y-auto"       >

            <ul className="list-none flex flex-col gap-3 md:gap-4 font-semibold text-gray-700 text-sm md:text-base">

                <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                    <Link to="/" className="flex items-center gap-3 w-full">
                        <Home className="h-5 w-5 md:h-6 md:w-6 text-gray-700" />
                        <span>{language[langKey].Home}</span>
                    </Link>
                </li>

                <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                    <Flame className="h-5 w-5 md:h-6 md:w-6 text-gray-700" />
                    <span>{language[langKey].Shorts}</span>
                </li>

                <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                    <PlaySquare className="h-5 w-5 md:h-6 md:w-6 text-gray-700" />
                    <span>{language[langKey].Subscriptions}</span>
                </li>

            </ul>

            <hr className="my-3 border-gray-400" />

            
            <ul className="list-none flex flex-col gap-3 md:gap-4 font-semibold text-gray-700 text-sm md:text-base">

                <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                    <History className="h-5 w-5 md:h-6 md:w-6 text-gray-700" />
                    <span>{language[langKey].History}</span>
                </li>

                <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                    <Video className="h-5 w-5 md:h-6 md:w-6 text-gray-700" />
                    <span>{language[langKey].YourVideos}</span>
                </li>

                <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                    <Clock className="h-5 w-5 md:h-6 md:w-6 text-gray-700" />
                    <span>{language[langKey].watchLater}</span>
                </li>

                <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                    <ThumbsUp className="h-5 w-5 md:h-6 md:w-6 text-gray-700" />
                    <span>{language[langKey].likedVideos}</span>
                </li>

                <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                    <ListVideo className="h-5 w-5 md:h-6 md:w-6 text-gray-700" />
                    <span>{language[langKey].playlists}</span>
                </li>

            </ul>

        </div>
    );

};

export default Sidebar;
