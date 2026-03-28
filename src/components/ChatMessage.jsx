import React from 'react'

function ChatMessage({name, message}) {
    return (
        <div className='flex m-1 p-2 items-center shadow-sm hover:bg-white/5 rounded transition-colors'>
            <div className='h-6 w-6 rounded-full flex items-center justify-center text-white text-[9px] font-bold shrink-0 bg-blue-500'>
                {name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)}
            </div>
            <span className='font-bold px-2 text-sm text-blue-400 shrink-0'>{name}</span>
            <span className='text-sm text-gray-600 break-words'>{message}</span>
        </div>
    )
}

export default ChatMessage