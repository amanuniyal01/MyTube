import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import RecommendedVideos from "./RecommendedVideos";

function WatchPage() {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-12 mt-28 px-8 gap-6">

    
      <div className="col-span-8">
        <iframe
          className="w-full h-[520px] rounded-lg shadow-xl"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        />
      </div>

     
      <div className="col-span-1">
        <RecommendedVideos videoId={videoId} />
      </div>

    </div>
  );
}

export default WatchPage;
