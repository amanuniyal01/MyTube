import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
    name: "Search",
    initialState: {

    },
    reducers: {
        cacheResults: (state, actions) => {
            state = Object.assign(state, actions.payload)
        }
    }

})
export const { cacheResults } = SearchSlice.actions;
export default SearchSlice.reducer