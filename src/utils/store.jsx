import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice"
import SearchSlice from "./SearchSlice"
import configReducer from "./configSlice";
import VideoReducer from "./VideoSlice";
import ChatSlice from "./ChatSlice";
import userReducer from "./UserSlice"
import themeReducer from "./ThemeSlice"
const store = configureStore({
    reducer: {
        app: appSlice,
        search: SearchSlice,
        config: configReducer,
        videos: VideoReducer,
        chat: ChatSlice,
        user: userReducer,
        theme: themeReducer
    }

})

export default store;