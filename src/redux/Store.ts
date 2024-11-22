import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterSlc } from "./Counter/CounterSlice";
import { postReducer } from "./Post/postSlice";


const rootReducer = {
    counter : counterSlc,
    post : postReducer
}
 const store = configureStore({
    reducer : rootReducer
});

export default store;