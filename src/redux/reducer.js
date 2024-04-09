import taskReducer from "./slices/taskSlice";
import filterReducer from "./slices/filterSlice";
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    //combined the reducer resulting in a gloab state object consisting of todos and filters
    todos: taskReducer,
    filters: filterReducer
  })

export default rootReducer;