import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterSlc } from "./Counter/CounterSlice";


const rootReducer = {
    counter : counterSlc
}
 const store = configureStore({
    reducer : rootReducer
});

export default store;