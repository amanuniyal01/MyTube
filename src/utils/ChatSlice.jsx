import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constant";

const ChatSlice = createSlice({
    name: "chatSlice",
    initialState: {
        messages: []
    },
    reducers: {
        addMessage: (state, action) => {
            if (state.messages.length >= 10) {
                state.messages.splice(OFFSET_LIVE_CHAT, 1)
            }
            state.messages.unshift(action.payload)

        }
    }


})
export const { addMessage } = ChatSlice.actions
export default ChatSlice.reducer;