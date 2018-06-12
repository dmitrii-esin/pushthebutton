import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './';

const initialState = {};

const logger = createLogger({
    predicate: () => process.env.NODE_ENV === 'development'

});

const middleware = [
  thunk,
  logger
];

const composedEnhancers = compose(
  applyMiddleware(...middleware)
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);

export default store;