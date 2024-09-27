import {configureStore} from "@reduxjs/toolkit";
import cryptSlice from "./slices/Crypt.slice.ts";

export const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(
        {
            serializableCheck: false,
        }
    ),
    reducer: {
        crypt: cryptSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch