import {ActionReducerMapBuilder, createSlice} from "@reduxjs/toolkit";
import {CryptState} from "../interfaces/Crypt.interfaces.ts";
import {getAllCryptsHandler} from "../handlers/Crypt.handlers.ts";

const initialState: CryptState = {
    allCrypts: [],
    isLoadingAllCrypts: false,
    isSuccess: false,
    error: "",
}

const cryptSlice = createSlice({
    name: "crypt",
    initialState: initialState,
    reducers: {},
    extraReducers(builder: ActionReducerMapBuilder<CryptState>) {
        getAllCryptsHandler(builder);
    }
})

export default cryptSlice.reducer;