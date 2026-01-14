import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';



function VideoContainer() {
    const [videos, Setvideos] = useState([])
    useEffect(() => {
        getVideos();

    }, [])


    const getVideos = async () => {

        const data = await fetch(YOUTUBE_API);
        const json = await data.json()
        console.log(json.items)
        Setvideos(json.items)

    }

     return (
    <div className="flex  flex-wrap justify-center gap-6 mt-16 px-6">
      {videos.map((video) => (
        <Link key={video.id} to={`/watch?v=${video.id}`}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
}

export default VideoContainer

