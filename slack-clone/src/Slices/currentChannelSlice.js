import {createSlice} from "@reduxjs/toolkit";
import {fetchData} from "./sharedActions";

const initialState = {
    id: 1,
}

const currentChannelSlice = createSlice({
    name: 'currentChannel',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.id = action.payload.currentChannelId;
        });
    }
});

export default currentChannelSlice.reducer;
