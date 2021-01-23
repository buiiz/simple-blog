import { useMemo } from 'react';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import reducers from './reducers';

let store;

function initStore(initialState) {
  return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}

export const initializeStore = preloadedState => {
  // eslint-disable-next-line no-underscore-dangle
  let _store = store ?? initStore(preloadedState);

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    store = undefined;
  }

  if (typeof window === 'undefined') return _store;
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  // eslint-disable-next-line no-underscore-dangle
  const _store = useMemo(() => initializeStore(initialState), [initialState]);
  return _store;
}
