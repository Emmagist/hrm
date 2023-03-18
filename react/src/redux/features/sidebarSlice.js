import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeIndex: 0,
};

const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        setActiveIndex: (state, action) => {
            state.activeIndex = action.payload;
        },
    },
});

export const { setActiveIndex } = sidebarSlice.actions;
export default sidebarSlice.reducer;
