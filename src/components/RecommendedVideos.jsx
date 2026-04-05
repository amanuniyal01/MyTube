import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_API } from "../utils/constant";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const RecommendedVideos = ({ videoId }) => {
    const [videos, setVideos] = useState([]);
    const isDarkMode = useSelector((store) => store.theme.darkMode)

    useEffect(() => {
        fetchRecommended();
    }, []);

    const fetchRecommended = async () => {
        try {
            const res = await fetch(
                YOUTUBE_API
            )

            const data = await res.json();


            setVideos(data.items || []);
        } catch (err) {
            console.error(err);
        }
    };


    if (!videos.length) return <div>Loading...</div>;

    return (
        <div className={`space-y-2 ${isDarkMode?"bg-gray-800":""}`}>
            {videos.map((video) => (
                <Link key={video.id} to={`/watch?v=${video.id}`}>
                    <VideoCard info={video} />
                </Link>
            ))}
        </div>
    );
};

export default RecommendedVideos;
