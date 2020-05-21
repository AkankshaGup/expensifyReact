import {createStore} from 'redux';

const increment=({ incrementBY=1}={})=>({
  type:"INCREMENT",
  incrementBY
});
const decrement=({ decrementBy=1}={})=>({
  type:"DECREMENT",
  decrementBy
});
const reset=({count})=>({
  type:'RESET',
  count
})
const set=({count})=>({
  type:'SET',
  count
});
const reducer=(state={count:0}, action)=>{
  switch(action.type){
    case "INCREMENT": 
    return{
      count:state.count + action.incrementBY
    }
    case 'DECREMENT':
            return{
        count:state.count - action.decrementBy
      } 
      case 'RESET':
      return{
        count:action.count
      }
      case 'SET':
        return{
          count:action.count
        }
    default:
      return state;
  }

}
const store=createStore(reducer);

 const unsubscribe=store.subscribe(()=>{
  console.log(store.getState());
}) 
store.dispatch(increment({incrementBY:5}));
store.dispatch(increment());
store.dispatch(reset({count:0}));
store.dispatch(decrement(decrement({decrementBy:10})));
store.dispatch(decrement({decrementBy:10}));
store.dispatch(set({count:101}))