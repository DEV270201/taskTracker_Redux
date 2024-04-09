import {createStore} from 'redux';
import rootReducer from './reducer';

const store = createStore(rootReducer);

//returning global store
export default store;