import { createWrapper, MakeStore } from 'next-redux-wrapper';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import reducers from './reducers';

const makeStore: MakeStore = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));
};

const wrapper = createWrapper(makeStore);

export default wrapper;
