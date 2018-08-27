import React from 'react';
import Modal from 'react-modal';

const RemoveModal = ({isOpen, onCloseModal, handleRemoveExpense, handleCloseModal}) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={handleCloseModal}
    contentLabel="Remove Expense"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Are you sure to remove this expense?</h3>
    <div className="modal__body">
      <button className="button" onClick={handleRemoveExpense}>Yes</button>
      <button className="button button--secondary" onClick={handleCloseModal}>No</button>
    </div>
  </Modal>
);

export default RemoveModal;
