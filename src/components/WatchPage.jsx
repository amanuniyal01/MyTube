import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'

function WatchPage() {
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get("v")

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(closeMenu())
    }, [])
    return (
        <div className='fixed mt-28 ml-[30px]  '>
            <iframe className='rounded-lg shadow-2x'  width="935" height="526" 
                src={"https://www.youtube.com/embed/" + videoId} title="YouTube video player"
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}

export default WatchPage