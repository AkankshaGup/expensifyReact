import { v4 as uuidv4 } from 'uuid';



export const addExpense = (
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
export const removeexpense = ({ id } = {}) => ({
  type: 'REMOVE-EXPENSE',
  id
});

export const editExpense = ((id, updates) => ({
  type: 'EDIT-EXPENSE',
  id,
  updates
})
);

