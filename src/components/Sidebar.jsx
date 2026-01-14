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
        <div className="z-30 mt-20 bg-white h-[100vh] transition-all  w-[15vw] p-4 shadow-md">

            <ul className="list-none flex flex-col gap-4 font-semibold text-gray-700">
                <Link to="/"> <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                    <Home className="h-6 w-6 text-gray-700" />
                    <span>{language[langKey].Home
                    }</span>
                </li></Link>
                <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                    <Flame className="h-6 w-6 text-gray-700" />
                    <span>{language[langKey].Shorts}</span>
                </li>
                <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                    <PlaySquare className="h-6 w-6 text-gray-700" />
                    <span>{language[langKey].Subscriptions}</span>
                </li>
            </ul>

            <hr className="my-3 border-gray-400" />

            {/* Library Section */}
            <ul className="list-none flex flex-col gap-4 font-semibold text-gray-700">
                <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                    <History className="h-6 w-6 text-gray-700" />
                    <span>{language[langKey].History}</span>
                </li>
                <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                    <Video className="h-6 w-6 text-gray-700" />
                    <span>{language[langKey].YourVideos}</span>
                </li>
                <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                    <Clock className="h-6 w-6 text-gray-700" />
                    <span>{language[langKey].watchLater}</span>
                </li>
                <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                    <ThumbsUp className="h-6 w-6 text-gray-700" />
                    <span>{language[langKey].likedVideos}</span>
                </li>
                <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                    <ListVideo className="h-6 w-6 text-gray-700" />
                    <span>{language[langKey].playlists}</span>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
