import React from 'react';
import moment from 'moment';
import 'react-dates/initialize'; 
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


//const date=new Date();
const now=moment();
console.log(now.format("MMM Do, YYYY"));
class ExpenseForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      discription:props.expenses ? props.expenses.description : "",
      note: props.expenses ? props.expenses.note : "",
      amount:props.expenses ? (props.expenses.amount).toString() : '',
      createdAt:props.expenses ? moment(props.expenses.createdAt) :moment(),
      calenderFocused:false,
      error:""
    }
  }
  
  onDiscriptionChange = (e) => {
    const discription = e.target.value;
    this.setState(() => ({ discription }))
  }
  onNoteChange = (e) => {
    //   e.persist();
    const note = e.target.value;
    this.setState(() => ({ note }))
  }
  onAmountChange=(e)=>{
    const amount=e.target.value;
    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
      this.setState(() => ({ amount }))
    }
  }
  onDateChange=(createdAt)=>{
    if (createdAt) {
       this.setState(()=>({createdAt}));
    }
 
  };
  onFocusChange=({focused})=>{
   this.setState(()=>({calenderFocused:focused}));
  };
  onSubmit=(e)=>{
    e.preventDefault();
    if(!this.state.discription || !this.state.amount){
      this.setState(()=>({error:"please provide description and amount"}))
    }else{
      this.setState(()=>({error:""}))
      this.props.onSubmit({
        description:this.state.discription,
         amount:parseFloat(this.state.amount,10),
         createdAt:this.state.createdAt.valueOf(),
         note:this.state.note
      })
    }
  }
  render() {
    return (
      <div>
      {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input type='text' placeholder="Discription" autoFocus
            value={this.state.discription}
            onChange={this.onDiscriptionChange}
          />
          <input type='number' placeholder="amount" 
          value={this.state.amount}
          onChange={this.onAmountChange}
          />

          <SingleDatePicker
          date={this.state.createdAt} // momentPropTypes.momentObj or null
          onDateChange={this.onDateChange} // PropTypes.func.isRequired
          focused={this.state.calenderFocused} // PropTypes.bool
          onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
          numberOfMonths={1}
          isOutsideRange={()=>false}
                  />

          <textarea placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}


export default ExpenseForm;