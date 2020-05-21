import moment from 'moment'

const filterReducersDefaultState = {
  text: '',
  sortBY: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
}

export default (state = filterReducersDefaultState, action) => {
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
          sortBY:'date'
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