import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice"
import SearchSlice from "./SearchSlice"
import configReducer from "./configSlice";
const store = configureStore({
    reducer: {
        app: appSlice,
        search: SearchSlice,
        config: configReducer
    }

})

export default store;