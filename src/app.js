import React from "react";

import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import {addExpense, } from "./actions/expenses";

import "normalize.css/normalize.css";
import "./styles/styles.scss";
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({amount : 900,createdAt:1000,description:"Water bill"}));
store.dispatch(addExpense({amount : 250,createdAt:2000,description:"Gas bill"}));
store.dispatch(addExpense({amount : 70,createdAt:3000,description:"Rent"}));



const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(jsx, document.getElementById("app"));
