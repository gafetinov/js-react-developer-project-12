import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {fetchData} from "./sharedActions";

const channelsAdapter = createEntityAdapter();

const channelsSlice = createSlice({
    name: 'channels',
    initialState: channelsAdapter.getInitialState(),
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            channelsAdapter.setAll(state, action.payload.channels);
        })
    },
});

export const selectors = channelsAdapter.getSelectors();

export default channelsSlice.reducer;
