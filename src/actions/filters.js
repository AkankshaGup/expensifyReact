


export const setTextFilter = (text = '') => ({
  type: "setTextFilter",
  text
});

export const sortByAmount = () => ({
  type: 'sortByAmount',
});
export const sortByDate = () => ({
  type: 'sortByDate',
});

export const setStartDate = (date = "") => ({
  type: 'setStartDate',
  date
});
export const setEndDate = (date = '') => ({
  type: 'setEndDate',
  date
});