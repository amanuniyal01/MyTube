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

const Sidebar = () => {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen);


    return !isMenuOpen ? null : (
        <div className="bg-white h-[100vh] w-[15vw] p-4 shadow-md">

            {/* Top Section */}
            <ul className="list-none flex flex-col gap-4 font-semibold text-gray-700">
                <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                    <Home className="h-6 w-6 text-gray-700" />
                    <span>Home</span>
                </li>
                <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                    <Flame className="h-6 w-6 text-gray-700" />
                    <span>Shorts</span>
                </li>
                <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                    <PlaySquare className="h-6 w-6 text-gray-700" />
                    <span>Subscriptions</span>
                </li>
            </ul>

            <hr className="my-3 border-gray-400" />

            {/* Library Section */}
            <ul className="list-none flex flex-col gap-4 font-semibold text-gray-700">
                <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                    <History className="h-6 w-6 text-gray-700" />
                    <span>History</span>
                </li>
                <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                    <Video className="h-6 w-6 text-gray-700" />
                    <span>Your Videos</span>
                </li>
                <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                    <Clock className="h-6 w-6 text-gray-700" />
                    <span>Watch Later</span>
                </li>
                <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                    <ThumbsUp className="h-6 w-6 text-gray-700" />
                    <span>Liked Videos</span>
                </li>
                <li className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer">
                    <ListVideo className="h-6 w-6 text-gray-700" />
                    <span>Playlists</span>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
