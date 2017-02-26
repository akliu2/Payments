import React from 'react';
// Components
import PaymentsListItem from './payments_list_item';
// import TodoForm from './todo_form';

class PaymentsList extends React.Component {

  render() {
    const { payments, receivePayment } = this.props;
    const paymentItems = payments.map(payment => (
        <PaymentsListItem
          key={`payment-list-item${payment.id}`}
          payment={payment} />
      )
    );

    return(
      <div>
        <ul className="todo-list">
          { paymentItems }
        </ul>
      </div>
    );
  }
}

export default PaymentsList;
