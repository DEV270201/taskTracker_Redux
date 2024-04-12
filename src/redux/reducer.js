import taskReducer from "./slices/taskSlice";
import filterReducer from "./slices/filterSlice";
import {combineReducers} from 'redux';

//NOTE: for an event dispatched to the redux store, it will try to execute all the reducers
// if the action in different reducers is found to be the same then it will execute each of the reducer case.

const rootReducer = combineReducers({
    //combined the reducer resulting in a gloab state object consisting of todos and filters
    tasks: taskReducer,
    filters: filterReducer
  })

export default rootReducer;