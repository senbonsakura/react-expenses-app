import React from 'react';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import RemoveModal from './Modal';
import ExpenseForm from './ExpenseForm';
import Modal from 'react-modal';
import { closeDialog, openDialog } from 'redux-dialog';



export class EditExpensePage extends React.Component {
  state = {
    modalIsOpen: false
  };

  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };

  onCloseModal = () => {
    this.props.startCloseModal();
  };

  onRemove = () => {
    this.props.startRemoveExpense({id: this.props.expense.id});
    this.props.history.push('/');
  };

  componentWillMount() {
    Modal.setAppElement('body');
  }

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
          <button className="button button--secondary" onClick={this.props.startOpenModal}>
            Remove Expense
          </button>
        </div>
        <RemoveModal
          handleRemoveExpense={this.onRemove}
          onRequestClose={this.onCloseModal}
          className="modal"
        />
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
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data)),
  startOpenModal: ()=> dispatch(openDialog("Remove Modal",{
    title:"Are you sure to remove this expense?",
  })),
  startCloseModal: ()=> dispatch(closeDialog("Remove Modal")),

});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
