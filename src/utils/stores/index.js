import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleare from 'redux-thunk';
import Reducers from '../reducers';

const logger = createLogger();
const middleware = applyMiddleware(thunkMiddleare, logger);

const Store = createStore(Reducers, middleware);
export default Store;