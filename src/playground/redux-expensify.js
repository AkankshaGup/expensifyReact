/* import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';

const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0 }
) => ({
  type: "ADD-EXPENSE",
  expense: {
    id: uuidv4(),
    description,
    note,
    amount,
    createdAt
  }

})
const removeexpense = ({ id } = {}) => ({
  type: 'REMOVE-EXPENSE',
  id
});

const editExpense = ((id, updates) => ({
  type: 'EDIT-EXPENSE',
  id,
  updates
})
);
const setTextFilter=(text='')=>({
  type:"setTextFilter",
  text
});
const expensesReducersDefaultState = [];

const expensesReducers = (state = expensesReducersDefaultState, action) => {
  switch (action.type) {
    case 'ADD-EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE-EXPENSE':
      return state.filter(({ id }) => id !== action.id)
    case 'EDIT-EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        }
        else {
          return {
            ...expense
          }
        }
      })
    default: {
      return state;
    }
  }
}
const sortByAmount=()=>({
type:'sortByAmount',
});
const sortByDate=()=>({
  type:'sortByDate',
  });
const filterReducersDefaultState = {
  text: '',
  sortBY: 'date',
  startDate: undefined,
  endDate: undefined
}
const setStartDate=(date="")=>({
type:'setStartDate',
date
});
const setEndDate=(date='')=>({
  type:'setEndDate',
  date
});
const filterReducers = (state = filterReducersDefaultState, action) => {
  switch (action.type) {
    case 'setTextFilter':
      return{
        ...state,
        text:action.text
      }
      case 'sortByAmount':
      return{
        ...state,
        sortBY:'amount'
      }
      case 'sortByDate':
        return{
          ...state,
          startDate:'date'
        };
         case 'setStartDate':
        return{
          ...state,
          startDate:action.date
        };
        case 'setEndDate':
          return{
            ...state,
            endDate:action.date
          }
    default: {
      return state;
    }
  }
}
const getVisibleExpense=((expense,{text,sortBY,startDate,endDate})=>{
  return expense.filter((expense)=>{
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a,b)=>{
    if(sortBY=='date'){
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if(sortBY=='amount'){
      return a.amount < b.amount ? 1 : -1;
    }
  })
});
const store = createStore(
  combineReducers({
    expenes: expensesReducers,
    filters: filterReducers
  })
);
store.subscribe(() => {
  const state=store.getState();
  const visibleExpense=getVisibleExpense(state.expenes,state.filters);
  console.log(visibleExpense);
})
const expenseone = store.dispatch(addExpense({ description: 'rent', amount: 100, createdAt:-2100}));
const expensetwo = store.dispatch(addExpense({ description: 'coffe', amount: 200, createdAt:-1000 }));

//store.dispatch(removeexpense({ id: expenseone.expense.id }))
//store.dispatch(editExpense(expensetwo.expense.id, { amount: 100 }))
//store.dispatch(setTextFilter('e'))
//store.dispatch(setTextFilter())

store.dispatch(sortByAmount())
//store.dispatch(sortByDate())

//store.dispatch(setStartDate(0));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(999));
const demoState = {
  expenes: [{
    id: '23',
    description: 'january rent',
    note: 'this was the final payment for the address',
    amount: 54500,
    createdAt: 0,
  }],
  filters: {
    text: 'rent',
    sortBY: 'amount',
    startDate: undefined,
    endDate: undefined
  }
} */