import {configureStore} from "@reduxjs/toolkit";
import messagesReducer from './messagesSlice.js';
import channelsReducer from './chanelsSlice.js';
import currentChannelReducer from "./currentChannelSlice";

export const store = configureStore({
    reducer: {
        messages: messagesReducer,
        channels: channelsReducer,
        currentChannel: currentChannelReducer,
    },
});
