import { createAsyncThunk } from "@reduxjs/toolkit";
import { CategoriesService } from "store/categories/service";

export const CategoriesDataAction = createAsyncThunk(
    "fetch/categoriesData",
    async(_, { rejectWithValue }) => {
        try {
            const response = await CategoriesService.categories();
            return response.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
    {
        cache: "no-index"
    }
);
