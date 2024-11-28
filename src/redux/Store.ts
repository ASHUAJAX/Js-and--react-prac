import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterSlc } from "./Counter/CounterSlice";
import { postReducer } from "./Post/postSlice";
import { toDoReducer } from "./ToDO/ToDO";


const rootReducer = {
    counter : counterSlc,
    post : postReducer,
    toDo : toDoReducer
}
 const store = configureStore({
    reducer : rootReducer
});

export default store;