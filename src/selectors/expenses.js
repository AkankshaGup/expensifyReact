import moment from 'moment';


export default ((expense,{text,sortBY,startDate,endDate})=>{
  return expense.filter((expense)=>{
    const momentcreatedAt=moment(expense.createdAt);
    const startDateMatch =startDate ? startDate.isSameOrBefore(momentcreatedAt, "day") : true; 
    const endDateMatch = endDate ? endDate.isSameOrAfter(momentcreatedAt, "day") : true; 
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a,b)=>{
    if(sortBY==='date'){
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if(sortBY==='amount'){
      return a.amount < b.amount ? 1 : -1;
    }
  })
});