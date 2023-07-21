import { createSlice } from "@reduxjs/toolkit";
import { CategoriesDataAction } from "store/categories/actions";
import { REDUX_STATES } from "utils/constants";

const initialState = {
    CategoriesDataStatus: null,
    data: [],
    errorMessage: "",
};
export const CategoriesData = createSlice({
    name: "categoriesData",
    initialState,
    reducers: {
        resetStatus: (state, action) => {
            switch (action.payload) {
                case "CategoriesDataStatus":
                    state.CategoriesDataStatus = null;
                    break;
                default:
                    break;
            }
        },
    },

    extraReducers: {
        [CategoriesDataAction.pending]: (state) => {
            state.errorMessage = "";
            state.CategoriesDataStatus = REDUX_STATES.PENDING;
        },
        [CategoriesDataAction.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.CategoriesDataStatus = REDUX_STATES.SUCCEEDED;
        },
        [CategoriesDataAction.rejected]: (state, { payload }) => {
            state.CategoriesDataStatus = REDUX_STATES.FAILED;
            if (payload.status === 422) {
                state.errorMessage = "422 error";
            } else {
                state.errorMessage = "error";
            }
        },
    },
});

export const { resetStatus } = CategoriesData.actions;

export default CategoriesData.reducer;
