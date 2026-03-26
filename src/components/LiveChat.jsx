import React from 'react'
import ChatMessage from './ChatMessage'

function LiveChat() {
    return (
        <div className=' w-full h-[500px] rounded-lg bg-slate-100  border-black border-solid border-2'>
            <ChatMessage name="Aman Uniyal" message="Hello Everyone" />
        </div>
    )
}

export default LiveChat