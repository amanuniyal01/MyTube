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
        if (!input.trim()) return;
        dispatch(addMessage({
            name: generateRandomName(),
            message: input
        }))
        setInput("")
    }

    const chatMessages = useSelector(store => store.chat.messages)

    useEffect(() => {
        const i = setInterval(() => {
            dispatch(addMessage({
                name: generateRandomName(),
                message: generateRandomMessage()
            }))
        }, 500)
        return () => clearInterval(i)
    }, [])

    return (
        <div className="flex flex-col w-full h-[580px] bg-gray-300 rounded-xl border border-[#272727] shadow-2xl overflow-hidden">

            {/* Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-600 border-b border-[#272727]">
                <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_6px_#ef4444] animate-pulse" />
                <span className="text-[#f1f1f1] text-xs font-semibold uppercase tracking-wider">Live Chat</span>
            </div>

            {/* Messages */}
            <div className="flex flex-col-reverse flex-1 overflow-y-scroll overflow-x-hidden px-1 py-2 scrollbar-thin scrollbar-thumb-[#333] scrollbar-track-transparent">
                {chatMessages.map((c, index) =>
                    <ChatMessage key={index} name={c.name} message={c.message} />
                )}
            </div>

            {/* Input area */}
            <div className="flex flex-col gap-2 px-3 py-3 bg-gray-300 border-t border-[#272727]">
                <form
                    onSubmit={handleSubmit}
                    className="flex items-center gap-2 bg-gray-200 rounded-full px-4 py-1.5 border border-transparent focus-within:border-[#3ea6ff] focus-within:shadow-[0_0_0_1px_rgba(62,166,255,0.2)] transition-all duration-200"
                >
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-1 bg-transparent border-none outline-none text-black text-sm placeholder-[#717171] caret-[#3ea6ff]"
                        placeholder="Say something..."
                    />
                    <button
                        type="submit"
                        aria-label="Send message"
                        className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-150
                            ${input.trim()
                                ? 'text-[#3ea6ff] hover:bg-[#3ea6ff22] active:scale-95'
                                : 'text-[#717171] cursor-default'
                            }`}
                    >
                        <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
                            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                        </svg>
                    </button>
                </form>
                <p className="text-[11px] text-[#555] text-center">Chat is live · Messages may be delayed</p>
            </div>

        </div>
    )
}

export default LiveChat
