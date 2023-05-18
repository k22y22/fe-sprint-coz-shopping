import { combineReducers } from 'redux';
import bookmarkReducer from './bookmarkReducer.js';

const rootReducer = combineReducers({
  bookmarkReducer,
  
});

export default rootReducer;