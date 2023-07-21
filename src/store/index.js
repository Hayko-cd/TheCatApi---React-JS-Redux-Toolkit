import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "store/categories/slice";
import catsReducer from "store/cats/slice"

export const Store = configureStore({
    reducer: {
        categories: categoriesReducer,
        cats: catsReducer
    }
});
