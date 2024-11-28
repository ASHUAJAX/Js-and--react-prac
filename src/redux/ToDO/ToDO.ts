import { createSlice } from "@reduxjs/toolkit";



const toDoSlice = createSlice({
    name:"toDOData",
    initialState:{data:[]},
    reducers:{
        addTask:(state:any,action:any)=>{
            
         return{...state,data:[...state.data,action.payload]}
        },
        deleteTask:(state,action)=>{
            console.log(action.payload)
            let filteredData = state.data.filter((elm)=>elm.taskId !== action.payload);
            return{...state,data:filteredData}
        }
    }
})

export const {addTask,deleteTask} = toDoSlice.actions;
export const toDoReducer = toDoSlice.reducer;
