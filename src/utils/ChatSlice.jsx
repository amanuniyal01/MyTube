import { createSlice } from "@reduxjs/toolkit";

const ChatSlice = createSlice({
    name: "chatSlice",
    initialState: {
        messages: []
    },
    reducers: {
        addMessage: (state, action) => {
            if (state.messages.length >= 10) {
                state.messages.splice(10, 1)
            }
            state.messages.unshift(action.payload)

        }
    }


})
export const { addMessage } = ChatSlice.actions
export default ChatSlice.reducer;