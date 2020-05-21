import { createStore, combineReducers } from 'redux';
import expensesReducers from '../reducers/expenses.js';
import filterReducers from '../reducers/filters.js';

export default ()=>{
  const store = createStore(
    combineReducers({
      expenes: expensesReducers,
      filters: filterReducers
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}
