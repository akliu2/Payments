export const RECEIVE_PAYMENTS = "RECEIVE_PAYMENTS";
export const RECEIVE_PAYMENT = "RECEIVE_PAYMENT";
export const PAYMENT_ERROR = "PAYMENT_ERROR";

// sync actions
export const receivePayments = payments => ({
  type: RECEIVE_PAYMENTS,
  payments
});

export const receivePayment = payment => ({
  type: RECEIVE_PAYMENT,
  payment
});

export const paymentError = error => ({
  type: PAYMENT_ERROR,
  error
})
