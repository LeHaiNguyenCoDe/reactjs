import { combineReducers } from '@reduxjs/toolkit';

import { signinReducer } from '../component/signin/signinSlice';

const rootReducer = combineReducers({
  signin: signinReducer,
});

export default rootReducer;
