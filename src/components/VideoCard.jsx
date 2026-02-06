import React from 'react'
import { useSelector } from 'react-redux';

function VideoCard({ info }) {
  if (!info) return null

  const { snippet, statistics } = info
  const { channelTitle, title, thumbnails } = snippet
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  return (
    <div
      className="group w-72 bg-white dark:bg-gray-900 border-b-0 rounded-2xl  hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-[1.02] overflow-hidden cursor-pointer"
    >
      <div className="relative">
        <img
          className={`w-full rounded-xl ${isMenuOpen ? "h-44" : "h-46"} object-cover`}
          src={thumbnails?.medium?.url}
          alt={title}
        />

        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-3">
        <h3 className="text-sm font-semibold line-clamp-2 group-hover:text-red-500 transition-colors text-black duration-300">
          {title}
        </h3>
        <p className="text-black text-xs font-semibold mt-1">{channelTitle}</p>
        <p className="text-black text-xs mt-1">
          {Number(statistics?.viewCount).toLocaleString()} views
        </p>
      </div>
    </div>
  )
}

export default VideoCard
