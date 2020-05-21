import React from 'react';
import {connect} from 'react-redux'
import {setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate} from '../actions/filters.js'
import {DateRangePicker } from 'react-dates';


class ExpenseListFilter extends React.Component{
  constructor(props){
    super(props);
    this.state={
      calenderFocused:null,
    }

  }
  onDatesChange=({startDate,endDate})=>{
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  }
  onFocusChange=(focused)=>{
    this.setState(()=>({calenderFocused:focused}));
  };
  render(){
    return(
      <div>
      <input type="text" value={this.props.filters.text} onChange={(e)=>{
        this.props.dispatch(setTextFilter(e.target.value))
      }} />
      <select 
      value={this.props.filters.sortBY}
      onChange={(e)=>{
        debugger;
        if(e.target.value==='date'){
          this.props.dispatch(sortByDate(e.target.value))
        }else if(e.target.value==='amount'){
          this.props.dispatch(sortByAmount(e.target.value))
        }
      }}>
      <option value="date">date</option>
      <option value="amount">amount</option>
      </select>


      <DateRangePicker
  startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
  startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
  endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
  endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
  onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
  focusedInput={this.state.calenderFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
  onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
  numberOfMonths={1}
  isOutsideRange={()=>false}
  showClearDates={true}
/>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return{
     filters:state.filters,
  }
};
export default connect(mapStateToProps) (ExpenseListFilter);