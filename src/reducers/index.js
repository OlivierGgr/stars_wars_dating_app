import { combineReducers } from 'redux';
import authReducer from './authReducer';
import newMatchReducer from './newMatchReducer';

const allReducers = combineReducers ({
    auth: authReducer,
    matches: newMatchReducer
});

export default allReducers;