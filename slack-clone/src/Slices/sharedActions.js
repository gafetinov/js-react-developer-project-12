import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk(
    'data/fetch',
    async (token) => {
        const { data } = await axios.get('/api/v1/data', {
            headers: { Authorization: `Bearer ${token}` },
        });
        return data;
    }
);
