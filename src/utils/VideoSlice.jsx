import { createSlice } from "@reduxjs/toolkit";

const VideoSlice = createSlice({
    name: "video",
    initialState: {
        videos: []
    },
    reducers: {
        SetVideos: (state, action) => {
            state.videos = action.payload

        }
    }
})

export const { SetVideos } = VideoSlice.actions;
export default VideoSlice.reducer;