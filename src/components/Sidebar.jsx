import { Link } from "react-router-dom";
import {
  Home,
  Flame,
  PlaySquare,
  History,
  ListVideo,
  Video,
  Clock,
  ThumbsUp,
  Music2,
  Gamepad2,
  Newspaper,
  Trophy,
  Lightbulb,
  ChevronDown,
  ChevronUp,
  Settings,
  HelpCircle,
  Flag,
  Bell,
} from "lucide-react";
import { useSelector } from "react-redux";
import { useState } from "react";
import language from "../utils/language";

const SidebarItem = ({ icon: Icon, label, to, badge }) => {
  const item = (
    <li className="flex items-center gap-5 px-3 py-2 mx-2 text-sm font-medium text-gray-900 rounded-lg cursor-pointer hover:bg-gray-100">
      <div className="flex items-center justify-center w-6 h-6 shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <span className="flex-1 text-[13.5px] truncate">{label}</span>
      {badge && (
        <span className="px-1.5 py-[2px] text-[10px] font-bold text-white bg-black rounded">
          {badge}
        </span>
      )}
    </li>
  );

  return to ? <Link to={to}>{item}</Link> : item;
};

const SectionTitle = ({ title }) => (
  <p className="px-5 pt-2 pb-1 text-xs font-semibold tracking-wide text-gray-500 uppercase">
    {title}
  </p>
);

const SubscriptionItem = ({ name, avatar, isLive }) => (
  <li className="flex items-center gap-5 px-3 py-2 mx-2 text-sm font-medium text-gray-900 rounded-lg cursor-pointer hover:bg-gray-100">
    <div className="relative w-6 h-6 shrink-0">
      {avatar ? (
        <img
          src={avatar}
          alt={name}
          className="object-cover w-6 h-6 rounded-full"
        />
      ) : (
        <div className="flex items-center justify-center w-6 h-6 text-[11px] font-bold text-white rounded-full bg-gradient-to-br from-red-400 to-red-600">
          {name.charAt(0).toUpperCase()}
        </div>
      )}
      {isLive && (
        <span className="absolute bottom-0 right-0 w-2 h-2 bg-red-600 border border-white rounded-full"></span>
      )}
    </div>

    <span className="flex-1 text-[13.5px] truncate">{name}</span>

    {isLive && (
      <span className="text-[10px] font-bold text-red-600">LIVE</span>
    )}
  </li>
);

const mockSubscriptions = [
  { name: "Fireship", isLive: false },
  { name: "Traversy Media", isLive: true },
  { name: "Kevin Powell", isLive: false },
  { name: "Theo - t3.gg", isLive: false },
  { name: "Coding with Lewis", isLive: true },
  { name: "Web Dev Simplified", isLive: false },
];

const Sidebar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const [showAllSubs, setShowAllSubs] = useState(false);

  const visibleSubs = showAllSubs
    ? mockSubscriptions
    : mockSubscriptions.slice(0, 4);

  if (!isMenuOpen) return null;

  return (
    <div className="fixed top-14 left-0 z-30 w-60 h-[calc(100vh-56px)] bg-white border-r overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
      
      {/* Main Nav */}
      <ul className="p-0 m-0 list-none">
        <SidebarItem icon={Home} label={language[langKey]?.Home || "Home"} to="/" />
        <SidebarItem icon={Flame} label={language[langKey]?.Shorts || "Shorts"} />
        <SidebarItem icon={PlaySquare} label={language[langKey]?.Subscriptions || "Subscriptions"} />
      </ul>

      <hr className="my-2 border-gray-200" />

      {/* You */}
      <SectionTitle title="You" />
      <ul className="p-0 m-0 list-none">
        <SidebarItem icon={History} label="History" />
        <SidebarItem icon={Video} label="Your videos" />
        <SidebarItem icon={Clock} label="Watch later" />
        <SidebarItem icon={ThumbsUp} label="Liked videos" />
        <SidebarItem icon={ListVideo} label="Playlists" />
        <SidebarItem icon={Bell} label="Notifications" badge="3" />
      </ul>

      <hr className="my-2 border-gray-200" />

      {/* Subscriptions */}
      <SectionTitle title="Subscriptions" />
      <ul className="p-0 m-0 list-none">
        {visibleSubs.map((sub) => (
          <SubscriptionItem key={sub.name} {...sub} />
        ))}
      </ul>

      <button
        onClick={() => setShowAllSubs((p) => !p)}
        className="flex items-center gap-5 w-[calc(100%-16px)] mx-2 px-3 py-2 text-sm font-medium rounded-lg hover:bg-gray-100"
      >
        {showAllSubs ? (
          <ChevronUp className="w-5 h-5" />
        ) : (
          <ChevronDown className="w-5 h-5" />
        )}
        {showAllSubs ? "Show less" : `Show ${mockSubscriptions.length - 4} more`}
      </button>

      <hr className="my-2 border-gray-200" />

      {/* Explore */}
      <SectionTitle title="Explore" />
      <ul className="p-0 m-0 list-none">
        <SidebarItem icon={Flame} label="Trending" />
        <SidebarItem icon={Music2} label="Music" />
        <SidebarItem icon={Gamepad2} label="Gaming" />
        <SidebarItem icon={Newspaper} label="News" />
        <SidebarItem icon={Trophy} label="Sports" />
        <SidebarItem icon={Lightbulb} label="Learning" />
      </ul>

      <hr className="my-2 border-gray-200" />

      {/* Settings */}
      <ul className="p-0 m-0 list-none">
        <SidebarItem icon={Settings} label="Settings" />
        <SidebarItem icon={HelpCircle} label="Help" />
        <SidebarItem icon={Flag} label="Send feedback" />
      </ul>

      <hr className="my-2 border-gray-200" />

      {/* Footer */}
      <div className="flex flex-wrap gap-x-2 gap-y-1 px-5 py-2 text-xs text-gray-500">
        {["About","Press","Copyright","Contact","Creators","Advertise","Developers"].map((link) => (
          <a key={link} href="#" className="hover:text-black">
            {link}
          </a>
        ))}
      </div>

      <p className="px-5 pb-2 text-xs text-gray-400">
        © 2025 MyTube
      </p>
    </div>
  );
};

export default Sidebar;