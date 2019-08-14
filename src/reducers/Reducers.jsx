import { combineReducers } from 'redux';
import { conversorReducer } from './ConversorReducer';

export const Reducers = combineReducers({
    conversorState: conversorReducer
});