import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { allPayments } from './reducers/selectors';
import { receivePayments, receivePayment, paymentError } from './actions/payment_actions.js';

window.receivePayment = receivePayment;
window.receivePayments = receivePayments;
window.paymentError = paymentError;
//testing
// import allPayments from './reducers/selectors';

import Root from './components/root';
// import App from './components/app';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const selector = allPayments;

  debugger;
  window.store = store;

  //testing
  window.payments = selector;


  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});
