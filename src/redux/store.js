import {legacy_createStore as createStore,compose} from 'redux';
import rootReducer from './reducer';
import { addActionsLoggerEnhancer,addStateLoggerEnhancer } from './addOns/enhancers';


//1. For preloadedState : we cannot pass the reference of the function, we have to call it o/w error will be thrown
//2. If the function does not return anything or it returns a promise object, redux will simply ignore it and dispatch a dummy event for
//   initializing the store state
//3. If you are using combinedreducer function, make sure your preloadedState object have the same structure, unmatched keys will be ignored by redux

//preloaded state
function getData(){
  return {
    tasks:{
      tasks:[]
    },
    filters:{
        value:"all"
    }
  };
}

//compose is used for combining the enhancers into one
const composedEnhancers = compose(addActionsLoggerEnhancer,addStateLoggerEnhancer);


const store = createStore(rootReducer,getData(),composedEnhancers);
//subscribing to the store. Will be triggered on every update made to the store
store.subscribe(()=>{
  // console.log("State updated .... : ",store.getState());
  return;
})

//returning global store
export default store;