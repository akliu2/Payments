import { connect } from 'react-redux';
import PaymentsList from './payments_list';

// Actions
import { receivePayments, receivePayment } from '../../actions/payment_actions';
import { allPayments } from '../../reducers/selectors';

const mapStateToProps = state => ({
  payments: allPayments(state),
  state
});

const mapDispatchToProps = dispatch => ({
  receivePayments: () => dispatch(receivePayments()),
  receivePayment: payment => dispatch(receivePayment(payment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentsList);
