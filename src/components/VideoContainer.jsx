import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constant';
import VideoCard from './VideoCard';



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
        <div className='flex flex-wrap gap-8 mt-10'>
            {videos.map((video) => (
                <VideoCard key={video.id} info={video} />
            ))}
        </div>
    )
}

export default VideoContainer

