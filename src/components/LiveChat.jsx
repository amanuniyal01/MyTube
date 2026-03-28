import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/ChatSlice';
import { generateRandomName } from '../utils/helper';

function LiveChat() {
    const dispatch = useDispatch();
    const chatMessages = useSelector(store => store.chat.messages)
    useEffect(() => {
        const i = setInterval(() => {
            // API POLLING
            dispatch(addMessage({
                name: generateRandomName(),
                message: "I am from delhi✅"
            }))

        }, 1000)
        return () => clearInterval(i)
    }, [])
    return (


        <div className='flex flex-col-reverse overflow-y-scroll overflow-hidden w-full h-[500px] rounded-lg bg-slate-100  border-black border-solid border-2'>
            {chatMessages.map((c, index) =>
                <ChatMessage Key={index} name={c.name} message={c.message} />)
            }
        </div>
    )
}

export default LiveChat