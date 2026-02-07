import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice"
import SearchSlice from "./SearchSlice"
import configReducer from "./configSlice";
import VideoReducer from "./VideoSlice"
const store = configureStore({
    reducer: {
        app: appSlice,
        search: SearchSlice,
        config: configReducer,
        videos: VideoReducer
    }

})

export default store;