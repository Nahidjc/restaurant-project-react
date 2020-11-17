import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger';
import { Reducer } from "./reducer";
import thunk from 'redux-thunk';
const myStore = createStore(Reducer, applyMiddleware(logger, thunk));
export default myStore;