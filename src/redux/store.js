import {createStore} from 'redux';
import rootReducer from './reducer';

const store = createStore(rootReducer);
console.log(store);

//returning global store
export default store;