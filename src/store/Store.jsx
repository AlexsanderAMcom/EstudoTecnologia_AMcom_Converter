import { createStore, applyMiddleware } from 'redux';
import { Reducers } from '../reducers/Reducers';
import thunk from 'redux-thunk';

export const Store = createStore(Reducers,  applyMiddleware(thunk));