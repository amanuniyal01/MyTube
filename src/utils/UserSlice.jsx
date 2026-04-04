import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        setUser: (state, action) => action.payload,
        clearUser: () => null,
    }

})
export const { setUser, clearUser } = UserSlice.actions;
export default UserSlice.reducer;