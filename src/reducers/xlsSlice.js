import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    xlsLoadingStatus: null,
    xlsError: false,
    xlsData: [],
    xlsColNames: []
};

const xlsSlice = createSlice({
    name: 'xls',
    initialState,
    reducers: {
        loadingXls(state) {
            state.xlsLoadingStatus = 'loading';
            state.xlsError = false;
        },
        loadedXls(state, action) {
            if(action.payload && action.payload.length > 0) {
                state.xlsColNames = Object.keys(action.payload[0]);
                state.xlsColNames.push("Затраты");
                state.xlsData = [];
                for(const item of action.payload) {
                    state.xlsData.push(Object.values(item));
                }
                state.xlsLoadingStatus = 'idle';
            }
        },
        rejectXls(state) {
            state.xlsError = true;
            state.xlsLoadingStatus = null;
        }
    }
});

const { reducer, actions } = xlsSlice;

export default reducer;
export const {
    loadingXls,
    loadedXls,
    rejectXls
} = actions;