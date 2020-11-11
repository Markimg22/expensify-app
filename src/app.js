import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import AppRouter from './routers/AppRouter';
import configStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configStore();

store.dispatch(addExpense({ description: "Water bill", amount: 20, createdAt: 2010 }));
store.dispatch(addExpense({ description: "Gas bill", amount: 2000, createdAt: 2020 }));
store.dispatch(addExpense({ description: "Rent", amount: 10000, createdAt: 2015 }));
store.dispatch(addExpense({ description: "Cellphone", amount: 20000, createdAt: 2019 }));
store.dispatch(addExpense({ description: "Imposto", amount: 500, createdAt: 2000 }));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));