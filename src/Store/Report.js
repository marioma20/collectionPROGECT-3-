import { createSlice } from "@reduxjs/toolkit";

const report = createSlice({
    name: 'report',
    initialState: {logs: []},
    reducers:{
        loginsert: (state, action) => {
            state.logs.push(action.payload);
        }
    }
});
export const {loginsert} = report.actions;
export default report.reducer;