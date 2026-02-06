import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



function VideoContainer() {
  const [videos, SetVideos] = useState([])
  useEffect(() => {
    getVideos();

  }, [])

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  const getVideos = async () => {

    const data = await fetch(YOUTUBE_API);
    const json = await data.json()
    console.log(json.items)
    SetVideos(json.items)

  }

  return (
    <div className={`flex  flex-wrap justify-center gap-6 ${isMenuOpen ? "-ml-10" : "ml-50"} mt-16 px-6`}>
      {videos.map((video) => (
        <Link key={video.id} to={`/watch?v=${video.id}`}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
}

export default VideoContainer

