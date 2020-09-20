import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const middleware = [thunk];

export default preloadedState =>
  createStore(
    reducers,
    preloadedState,
  );
