//I have made use of enhancer that customizes the default dispatch function

const addActionsLoggerEnhancer = (createStore) => {
    return function (rootReducer,preloadedState,enhancer){
        const store = createStore(rootReducer,preloadedState,enhancer);
        
        //custom dispatch function
        function customDispatch(action){
            console.log("Action dispatched... : ",action.type);
            let result = store.dispatch(action);
            console.log("Action completed.... : ",action.type);
            return result;
        }

        return {
            ...store,
            dispatch:customDispatch
        }
    }
}

const addStateLoggerEnhancer = (createStore) => {
    return function(rootReducer,preloadedState,enhancer){
       const store = createStore(rootReducer,preloadedState,enhancer);

       //function customizing getState method
       function customGetState(){
         let state = store.getState();
        //  console.log("Current state : ",state);
         return state;
       }

       return {
        ...store,
        getState:customGetState
       }
    }
}

export {addActionsLoggerEnhancer,addStateLoggerEnhancer};