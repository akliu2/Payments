import { RECEIVE_PAYMENTS,
         RECEIVE_PAYMENT,
         TODO_ERROR } from '../actions/payment_actions';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    from: "mychi",
    to: "andrew",
    amount: 50000,
    card: "VISA",
    cardNumber: "1234567890123456"
  },
  2: {
    id: 2,
    from: "andrew",
    to: "mychi",
    amount: 25000,
    card: "VISA",
    cardNumber: "1234567890123456"
  }
};

// const paymentsReducer = (state = {}, action) => {
const paymentsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type){
    case RECEIVE_PAYMENTS:
      nextState = {};
      action.payments.forEach(payment => nextState[payment.id] = payment);
      return nextState;
    case RECEIVE_PAYMENT:
      const newPayment = {[action.payment.id]: action.payment};
      return merge({}, state, newPayment);
    case TODO_ERROR:
      alert(action.error);
    default:
      return state;
  }
};

export default paymentsReducer;
