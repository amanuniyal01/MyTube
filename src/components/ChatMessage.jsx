import React from 'react'

function ChatMessage({name,message}) {
    return (
        <div className='flex p-2 items-center shadow-sm'>
            <img className='h-6 w-6' src="https://cdn-icons-png.flaticon.com/512/9187/9187532.png" />
            <span className='font-bold px-2'>{name}</span>
            <span>{message}</span>
        </div>
    )
}

export default ChatMessage