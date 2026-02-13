import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SetVideos } from '../utils/VideoSlice';
import withPromotedLabel from './withPromotedLabel';

const PromotedVideoCard = withPromotedLabel(VideoCard);

function VideoContainer() {
  const videos = useSelector(store => store.videos.videos) || []
  const dispatch = useDispatch()
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  useEffect(() => {
    getVideos();
  }, [])

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json()
    dispatch(SetVideos(json.items))
  }

  return (
    <div className={`flex flex-wrap justify-center gap-6 ${isMenuOpen ? "md:ml-60" : "md:ml-20"} mt-16 px-6`}>
      {videos?.map((video) => {
        const isPromoted =
          Number(video?.statistics?.viewCount) > 1000000;

        return (
          <Link key={video.id} to={`/watch?v=${video.id}`}>
            {isPromoted
              ? <PromotedVideoCard info={video} />
              : <VideoCard info={video} />
            }
          </Link>
        )
      })}
    </div>
  );
}


export default VideoContainer

