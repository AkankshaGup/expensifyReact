import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './expenseForm.js'
import {editExpense, removeexpense} from '../actions/expenses'

const EditExpensePage = (props) => {
  return (
    <div>
     < ExpenseForm 
     expenses={props.expenses}
     onSubmit={(expense)=>{
      props.dispatch(editExpense(props.expenses.id, expense));
      props.history.push("/");
     }}
     />

     <button onClick={()=>{
      props.dispatch(removeexpense({id:props.expenses.id}));
      props.history.push("/");
    }}>remove</button>
    </div>
  );
};
const mapStateToProps = (state, props) => {
  return {
    expenses: state.expenes.find((expense) => {
      return expense.id === props.match.params.id;
    })
  }
}
export default connect(mapStateToProps)(EditExpensePage);