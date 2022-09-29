import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from '../reducers';

const store = createStore(rootReducer);

export default store;