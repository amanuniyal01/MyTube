import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { GOOGLE_API } from "../utils/constant";
import { Link } from "react-router-dom";


const RecommendedVideos = () => {
    const [videos, setVideos] = useState([]);
    


    useEffect(() => {
        fetchRecommended();
    }, []);

    const fetchRecommended = async () => {
        try {
            const res = await fetch(
                `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=IN&key=${GOOGLE_API}`
            );

            const data = await res.json();


            setVideos(data.items || []);
        } catch (err) {
            console.error(err);
        }
    };


    if (!videos.length) return <div>Loading...</div>;

    return (
        <div className="space-y-2">
            {videos.map((video) => (
                <Link key={video.id} to={`/watch?v=${video.id}`}>
                    <VideoCard info={video} />
                </Link>
            ))}
        </div>
    );
};

export default RecommendedVideos;
