import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPost = createAsyncThunk("fetchPost",async (_, thunkApi) => {
  try {
    const apisResp = await axios.get("https://jsonplaceholder.typicode.com/todos");
    return apisResp.data;
  } catch (err) {
    thunkApi.rejectWithValue({message : err.message});
  }
});
