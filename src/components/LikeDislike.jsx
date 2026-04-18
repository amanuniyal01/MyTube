import { Download, Save, Share2, ThumbsDown, ThumbsUp } from 'lucide-react'
import React from 'react'

function LikeDislike() {
  return (
   <div className='flex justify-between'>
    <div className="flex items-center gap-4 bg-gray-100 px-4 py-2 rounded-full shadow-sm">
    <button className="flex items-center gap-1 hover:text-blue-600 transition">
      <ThumbsUp  size={18} />
      <span className="text-sm">Like</span>
    </button>

    <div className="w-px h-5 bg-gray-300"></div>

    <button className="flex items-center gap-1 hover:text-red-500 transition">
      <ThumbsDown size={18} />
      <span className="text-sm">Dislike</span>
    </button>
  </div>

  
  <div className="flex items-center gap-3">
    {[Share2, Save, Download].map((Icon, index) => (
      <button
        key={index}
        className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition shadow-sm"
      >
        <Icon size={18} />
      </button>
    ))}
  </div>
   </div>
  )
}

export default LikeDislike