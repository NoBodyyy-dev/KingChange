import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(
        {
            serializableCheck: false,
        }
    ),
    reducer: {

    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch