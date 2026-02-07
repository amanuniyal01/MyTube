import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SetVideos } from '../utils/VideoSlice';



function VideoContainer() {
  const videos = useSelector(store => store.videos.videos) || []
  const dispatch = useDispatch()

  useEffect(() => {
    getVideos();

  }, [])

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  const getVideos = async () => {

    const data = await fetch(YOUTUBE_API);
    const json = await data.json()
    console.log(json.items)
    dispatch(SetVideos(json.items))

  }

  return (
    <div className={`flex  flex-wrap justify-center gap-6 ${isMenuOpen ? "md:-ml-10" : "md:ml-50"} mt-16 px-6`}>
      {videos?.map((video) => (
        <Link key={video.id} to={`/watch?v=${video.id}`}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
}

export default VideoContainer

