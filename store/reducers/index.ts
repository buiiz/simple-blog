import { combineReducers } from 'redux';

import mainReducer from './mainReducer';
import postReducer from './postReducer';

const reducers = combineReducers({
  posts: mainReducer,
  post: postReducer,
});

export default reducers;

export type StoreType = ReturnType<typeof reducers>;
