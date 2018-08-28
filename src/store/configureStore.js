import { createStore, combineReducers, applyMiddleware,compose } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';
import thunk from 'redux-thunk'
import { dialogReducer } from "redux-dialog";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  return createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
      auth: authReducer,
      dialogReducer
    }),
    composeEnhancers(applyMiddleware(thunk))

  );

};

