import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {fetchData} from "./sharedActions";

const messagesAdapter = createEntityAdapter();

const messagesSlice = createSlice({
    name: 'messages',
    initialState: messagesAdapter.getInitialState(),
    extraReducers: builder => {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            messagesAdapter.setAll(state, action.payload.messages);
        });
    },
});

export const selectors = messagesAdapter.getSelectors();

export default messagesSlice.reducer;
