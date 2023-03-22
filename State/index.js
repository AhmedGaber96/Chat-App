import { configureStore } from "@reduxjs/toolkit";
import counterReducer  from './getSlice'
export const store= configureStore({
    reducer:{counterReducer }
})