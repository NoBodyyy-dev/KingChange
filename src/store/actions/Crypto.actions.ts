import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../api.ts";

export const getAllCryptsFunc = createAsyncThunk(
    "crypt/getAllCryptsFunc", async (_settings: {start: number, limit: number}, thunkAPI) => {
        try {
            const response = await api.get(`tickers/?start=${_settings.start}&limit=${_settings.limit}`);
            if (response.status !== 200) return thunkAPI.rejectWithValue(response.data);
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
)