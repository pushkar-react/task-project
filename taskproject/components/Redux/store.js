import {createStore} from 'redux';
import {default as reducer} from './reducer';

const store = createStore(reducer);

export default store;
