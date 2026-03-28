import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'

function LiveChat() {
    useEffect(() => {
        const i = setInterval(() => {
            // API POLLING
        console.log("API POLLING")

        }, 2000)
        return () => clearInterval(i)
    }, [])
    return (


        <div className=' w-full h-[500px] rounded-lg bg-slate-100  border-black border-solid border-2'>
            <ChatMessage name="Aman Uniyal" message="Hello Everyone" />
        </div>
    )
}

export default LiveChat