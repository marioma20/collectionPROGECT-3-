import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginsert } from "./Report";
 export const getbooks = createAsyncThunk('bookslice/getbooks', async(_, thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const res = await fetch(`http://localhost:3000/books`);
        const data = await res.json();
        return data;
    }catch (error){
        return rejectWithValue(error.message);
    }
})
export const insertbook = createAsyncThunk('bookslice/insertbook', async(bookdata, thunkAPI)=>{
    const {rejectWithValue, getState, dispatch} = thunkAPI;
    try{
        // console.log(getState().auther.name)
        bookdata.useName = getState().auther.name;
        const res = await fetch(`http://localhost:3000/books`,
            {
                method: "POST",
                body: JSON.stringify(bookdata),
                headers: {
                    "Content-Type": `application/json; charset=utf-8`,
                  },
            },
        );
        const data = await res.json();
        // report
        dispatch(loginsert({name: 'insertbook', status: 'success'}));
        return data;

    }catch (error){
        dispatch(loginsert({name: 'insertbook', status: 'failed'}));
        return rejectWithValue(error.message);
    }
})
export const deletebook = createAsyncThunk('bookslice/deletebook', async (item, thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
        const res = await fetch(`http://localhost:3000/books/${item.id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": `application/json; charset=utf-8`,
                  },
            }
        );
        console.log(res)

        return item;

    }catch (error){
        return rejectWithValue(error.message);
    }
})
export const viewdata = createAsyncThunk('bookslice/viewdata', async (item, thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try{
         await fetch(`http://localhost:3000/books/${item.id}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": `application/json; charset=utf-8`,
                  },
            }
        );
    return item;

    }catch (error){
        return rejectWithValue(error.message);
    }
})

const bookslice = createSlice({
    name:"bookslice",
    initialState: {book:[], isloading:false, error:null, bookinfo: null},
    reducers:{},
    extraReducers: (builder)=>{
        // getbook
        builder.addCase(getbooks.pending, (state, action)=>{
            state.isloading= true;
            state.error = null;
            // console.log(action)
        });
        builder.addCase(getbooks.fulfilled, (state, action)=>{
            state.book = action.payload;
            state.isloading = false;
            // console.log(action)
        });
        builder.addCase(getbooks.rejected, (state, action)=>{
             state.isloading = false;
             state.error = action.payload
            // console.log(action)
        });
        // insertbook
        builder.addCase(insertbook.pending, (state, action)=>{
            state.isloading= true;
            state.error = null;
        })
        builder.addCase(insertbook.fulfilled, (state, action)=>{
            state.isloading = false;
            state.book.push(action.payload);

        })
        builder.addCase(insertbook.rejected, (state, action)=>{
            state.isloading = false;
            state.error = action.payload;
        })
        // delete
        builder.addCase(deletebook.pending, (state, action)=>{
            state.isloading= true;
            state.error = null;
        })
        builder.addCase(deletebook.fulfilled, (state, action)=>{
            state.isloading = false;
            state.book = state.book.filter((el)=> el.id !== action.payload.id) ;
            console.log(action);
        })
        builder.addCase(deletebook.rejected, (state, action)=>{
            state.isloading = false;
            state.error = action.payload;
        })
        // view
        builder.addCase(viewdata.fulfilled, (state, action)=>{
            state.isloading = false;
            state.bookinfo = action.payload ;
            console.log(action);
        })

    }
    // extraReducers:{
    //     [getbooks.pending]: (state, action) => {
    //         console.log(action)
    //     },
    //     [getbooks.fulfilled]: (state, action) => {
    //         console.log(action)
    //     },
    //     [getbooks.rejected]: (state, action) => {
    //         console.log(action)
    //     },
    // }
});
export default bookslice.reducer;

