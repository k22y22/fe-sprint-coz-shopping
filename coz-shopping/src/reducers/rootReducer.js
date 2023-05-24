import { combineReducers } from 'redux';
import bookmarkReducer from './bookmarkReducer.js';

const rootReducer = combineReducers({
  bookmarks: bookmarkReducer,
  
});

export default rootReducer;