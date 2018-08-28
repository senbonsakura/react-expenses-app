import React from 'react';
import reduxDialog from "redux-dialog";

const BasicModal = ({handleRemoveExpense, onRequestClose, payload}) => (
  <div
  >
    <h3 className="modal__title">{payload && payload.title}</h3>
    <div className="modal__body">
      <button className="button" onClick={handleRemoveExpense}>Yes</button>
      <a href="#" className="button button--secondary" onClick={onRequestClose}>No</a>
    </div>
  </div>
);


const RemoveModal = reduxDialog({
  name: "Remove Modal"
})(BasicModal);

export default RemoveModal;
