import {ActionReducerMapBuilder} from "@reduxjs/toolkit";
import {CryptState} from "../interfaces/Crypt.interfaces.ts";
import {getAllCryptsFunc} from "../actions/Crypto.actions.ts";

export const getAllCryptsHandler = (builder: ActionReducerMapBuilder<CryptState>) => {
    builder
        .addCase(getAllCryptsFunc.pending, (_state: CryptState, _) => {
            _state.isLoadingAllCrypts = true;
        })
        .addCase(getAllCryptsFunc.rejected, (_state: CryptState, action) => {
            console.log(action.payload.message);
            _state.isLoadingAllCrypts = false;
            _state.isSuccess = false;
            _state.error = action.payload.message;
        })
        .addCase(getAllCryptsFunc.fulfilled, (_state: CryptState, action) => {
            _state.isLoadingAllCrypts = false;
            _state.isSuccess = true;
            _state.allCrypts = action.payload.data;
        })
}