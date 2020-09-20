import { combineReducers } from 'redux';

import { task } from './task.reducer';

const rootReducer = combineReducers({ task });

export default rootReducer;
