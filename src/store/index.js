import { configureStore } from "@reduxjs/toolkit";
import xlsReducer from "../reducers/xlsSlice";

const store = configureStore({
    reducer: {xlsReducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    // eslint-disable-next-line
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;