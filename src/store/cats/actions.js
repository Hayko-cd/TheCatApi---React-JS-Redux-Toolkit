import { createAsyncThunk } from "@reduxjs/toolkit";
import { CatService } from "store/cats/service";

export const CatsDataAction = createAsyncThunk(
    "fetch/catsData",
    async(data, { rejectWithValue }) => {
        try {
            const response = await CatService.cats(data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
    {
        cache: "no-index"
    }
);
