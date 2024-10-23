import { createSlice } from "@reduxjs/toolkit";

const authslice = createSlice({
    name: "authslice",
    initialState:{isloggedin:false, name: 'kareem noor'},
    reducers:{
        loginout: (state) =>{
            state.isloggedin = !state.isloggedin;
        }
    }
})

export const {loginout} = authslice.actions;
export default authslice.reducer;
