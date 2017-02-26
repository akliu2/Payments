import React from 'react';
// import TodoDetailViewContainer from './todo_detail_view_container';
import merge from 'lodash/merge';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {detail: false};
    // this.toggleDetail = this.toggleDetail.bind(this);
    // this.toggleTodo = this.toggleTodo.bind(this);
  }

  // toggleDetail(e) {
  //   e.preventDefault();
  //   this.setState({ detail: !this.state.detail });
  // }
  //
  // toggleTodo(e) {
  //   e.preventDefault();
  //   const toggledTodo = merge(
  //     {},
  //     this.props.todo,
  //     { done: !this.props.todo.done }
  //   );
  //
  //    this.props.receiveTodo(toggledTodo);
  // }

  render() {
    const { payment } = this.props;
    const { to, from, amount, card, cardNumber } = payment;

    return (
      <li className="payment-list-item">
        <div className="payment-header">
          <h3>Payment from { from } to { to }</h3>
          Amount: { amount }
          Card: {card}
          cardNumber: {cardNumber}
        </div>
      </li>
    );
  }
}

export default TodoListItem;
