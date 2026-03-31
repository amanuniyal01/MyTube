import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/ChatSlice';
import { generateRandomMessage, generateRandomName } from '../utils/helper';

function LiveChat() {
    const dispatch = useDispatch();
    const [input, setInput] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addMessage({
            name: generateRandomName(),
            message: input
        }))

    }
    const chatMessages = useSelector(store => store.chat.messages)
    useEffect(() => {
        const i = setInterval(() => {
            // API POLLING
            dispatch(addMessage({
                name: generateRandomName(),
                message: generateRandomMessage()
            }))

        }, 500)
        return () => clearInterval(i)
    }, [])
    return (

        <>        <div className='flex flex-col-reverse overflow-y-scroll overflow-hidden w-full h-[500px] rounded-lg bg-slate-100  border-black border-solid border-2'>
            {chatMessages.map((c, index) =>
                <ChatMessage key={index} name={c.name} message={c.message} />)
            }
        </div>
            <form onSubmit={handleSubmit}>
                <input value={input} onChange={(e)=>setInput(e.target.value)}className='p-2 bg-transparent' placeholder='Enter your message' />
                <button>Send</button>
            </form>
        </>

    )
}

export default LiveChat