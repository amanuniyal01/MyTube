import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { GOOGLE_API, YOUTUBE_SEARCH_API, YOUTUBE_SEARCH_RESULTS_API } from '../utils/constant'
import ResultCard from './ResultCard'
import { useSelector } from 'react-redux'
import Shimmer from './Shimmer'

function Results() {
    const [videos, SetVideos] = useState([])
    const [loading, setLoading] = useState(false)
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    const [searchParams] = useSearchParams()
    const query = searchParams.get("q")

    const fetchVideos = async () => {
        setLoading(true)
        const data = await fetch(YOUTUBE_SEARCH_RESULTS_API +
            encodeURIComponent(query) +
            "&key=" + GOOGLE_API)
        const json = await data.json()
        console.log(json)
        SetVideos(json.items)
        setLoading(false)
    }

    useEffect(() => {
        if (query) {
            fetchVideos()
        }
    }, [query])
   
    return (
        <div className={isMenuOpen ? "ml-65" : "ml-50"}>

            <div className='mt-20'>

                {loading ? (

                    <Shimmer />
                ) : (
                    videos.map((video) => (
                        <Link
                            key={video.id.videoId}
                            to={"/watch?v=" + video.id.videoId}
                        >
                            <ResultCard info={video} />
                        </Link>
                    ))
                )}

            </div>
        </div>
    );
}

export default Results