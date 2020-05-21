import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Approuters from "./router/approuters.js"
import {} from './playground/destructuring.js';
import {} from './playground/redux-expensify.js';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore.js'
import {addExpense} from './actions/expenses.js'
import getVisibleExpenses from './selectors/expenses.js'
const store=configureStore();

store.dispatch(addExpense({description:"water bill",amount:4500}));
store.dispatch(addExpense({description:"gas bill",createdAt:1000}));
store.dispatch(addExpense({description:"rent",amount:109500}));

const state=store.getState();
const visibleExpense=getVisibleExpenses(state.expenes,state.filters);

console.log(visibleExpense);

const jsx=(
  <Provider store={store}>
  <Approuters />
  </Provider>
)

ReactDOM.render(
  jsx,
  document.getElementById('root')
);


 