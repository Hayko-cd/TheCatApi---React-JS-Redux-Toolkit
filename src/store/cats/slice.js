import { createSlice } from "@reduxjs/toolkit";
import { CatsDataAction } from "store/cats/actions";
import { REDUX_STATES } from "utils/constants";

const initialState = {
    CatsDataStatus: null,
    data: [],
    errorMessage: "",
};
export const CatsData = createSlice({
    name: "catsData",
    initialState,
    reducers: {
        resetStatus: (state, action) => {
            switch (action.payload) {
                case "CatsDataStatus":
                    state.CatsDataStatus = null;
                    break;
                default:
                    break;
            }
        },
    },

    extraReducers: {
        [CatsDataAction.pending]: (state) => {
            state.errorMessage = "";
            state.CatsDataStatus = REDUX_STATES.PENDING;
        },
        [CatsDataAction.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.CatsDataStatus = REDUX_STATES.SUCCEEDED;
        },
        [CatsDataAction.rejected]: (state, { payload }) => {
            state.CatsDataStatus = REDUX_STATES.FAILED;
            if (payload.status === 422) {
                state.errorMessage = "422 error";
            } else {
                state.errorMessage = "error";
            }
        },
    },
});

export const { resetStatus } = CatsData.actions;

export default CatsData.reducer;
