import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";




export const fetchPosts = createAsyncThunk('posts/fetchposts',async(_,thunkAPI)=>{
    const {rejectWithValue}=thunkAPI
    try{
     const res=await fetch("https://mocki.io/v1/69d6d4b5-7445-48bf-9561-c675dc0fec22")
    let data = await res.json();
    console.log(data);
     return data;
 
    }catch(error){
     return rejectWithValue(error.message)
 
    }
 
 })

const initialState ={
Container:[],
}
export const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchPosts.fulfilled,(state,action)=>{
            state.Container=action.payload

        })

    }
      

    
})

export default counterSlice.reducer;