import { createStore, combineReducers } from 'redux';
import reducer from './modules/login/store/login.reducer';

const store = createStore(reducer);

export default store;
