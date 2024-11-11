import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    incri: (state: any) => {
      
      state.count += 1;
    },
    dicri: (state: any,action) => {
      state.count -= action.payload;
    },
  },
});

export const { incri, dicri } = counterSlice.actions;
export const counterSlc = counterSlice.reducer;
