import React from 'react';
import ConnectExpenseList from "./expenseList.js"
import ExpenseListFilter from "./expenseListFilter.js"

const ExpenseDashboardPage=()=>(
  <div>
  <ExpenseListFilter />
  <ConnectExpenseList />
  
  </div>
);

export default ExpenseDashboardPage;