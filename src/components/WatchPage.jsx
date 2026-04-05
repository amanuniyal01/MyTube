import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import RecommendedVideos from "./RecommendedVideos";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

function WatchPage() {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const isDarkMode=useSelector((store)=>store.theme.darkMode);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className={`grid ${isDarkMode?"bg-gray-800":"bg-white"}  w-full grid-cols-12 mt-28 px-3 md:px-8 gap-6`}>

      <div className=" col-span-12 md:col-span-9">
        <iframe
          className="w-full h-[400px] md:h-[520px] rounded-lg shadow-2xl"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        />
        <CommentsContainer />
      </div>

      <div className="col-span-12 md:col-span-3 w-full flex flex-col gap-4">
        <LiveChat />
        <RecommendedVideos videoId={videoId} />
      </div>

    </div>
  );
}

export default WatchPage;
