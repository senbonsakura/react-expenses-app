import React from 'react';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import RemoveModal from './EditExpenseRemoveModal';
import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends React.Component {
  state= {
    isOpen: false
  };

  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  onRemoveModal = () => {
    this.setState(() => ({
      isOpen: true
    }));
  };
  onCloseModal = () => {
    this.setState(() => ({
      isOpen: false
    }));
  };

  onRemove = () => {
    this.props.startRemoveExpense({id: this.props.expense.id});
    this.props.history.push('/');
  };

  render () {
    return (

      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit}/>
          <button className="button button--secondary" onClick={this.onRemoveModal}>

            Remove Expense
            <RemoveModal handleRemoveExpense={this.onRemove} isOpen={this.state.isOpen} handleCloseModal={this.onCloseModal}/>
          </button>
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state, props) => ({
  expense: state
    .expenses
    .find((expense) => props.match.params.id === expense.id)

});

const mapDispatchToProps = (dispatch) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
