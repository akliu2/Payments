import { combineReducers } from 'redux';

import paymentsReducer from './payments_reducer';

const rootReducer = combineReducers({
  payments: paymentsReducer
 });

export default rootReducer;
