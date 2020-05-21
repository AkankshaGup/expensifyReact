import React from 'react';
import {connect} from 'react-redux'
import ExpenseListItem from './expenseListItem.js';
import selectExpenses from '../selectors/expenses.js'

const ExpenseList=(props)=>{
  return(
    <div>
    <h1>expense list</h1>
    {props.expenses.map((expenes)=>{
      return <ExpenseListItem key={expenes.id}{...expenes} />
    })}
    </div>
    )
};


const mapstateToProps=(state)=>{
  return{
    expenses:selectExpenses(state.expenes,state.filters)
  };
}
export default connect(mapstateToProps)(ExpenseList);