import moment from 'moment';
import numeral from 'numeral';
import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({dispatch, description, amount, createdAt, id}) => (

  <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <h3 className="list-item_title">{description}</h3>
      <span className="list-item__sub-title">{moment(createdAt).format('DD MMMM, YYYY')}</span>

    </div>
    <h3 className="list-item__data">
      {numeral(amount / 100).format('$0,0.00')}
    </h3>
  </Link>

);

export default ExpenseListItem;