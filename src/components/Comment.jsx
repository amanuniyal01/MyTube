import React from "react";

function Comment({ data }) {
  const { Name, text, replies } = data;

  return (
    <div className="flex gap-1 p-3  mt-5 rounded-lg bg-gray-300/60">
      
      <img
        className="h-10 w-10 rounded-full"
        alt="User"
        src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
      />

      <div>
        <h1 className="font-semibold">{Name}</h1>
        <p className="text-gray-700">{text}</p>
      </div>

    </div>
  );
}

export default Comment;