store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

  console.log(visibleExpenses);
});

/**
 * Tests
 */

const expenseOne = store.dispatch(addExpense({ description: "Rent", amount: 1000, createdAt: -1000 }));
const expenseTwo = store.dispatch(addExpense({ description: "Coffe", amount: 300, createdAt: 1000 }));

store.dispatch(removeExpense({ id: expenseOne.expense.id }));
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
store.dispatch(setTextFilter("rent"));
store.dispatch(sortByAmount());
store.dispatch(sortByDate());
store.dispatch(setStartDate(0));
store.dispatch(setEndDate(1000));

/*
const demoState = {
  expenses: [{
    id: "1",
    description: "January Rent",
    note: "This was the final payment for that address.",
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: "rent",
    sortBy: "amount",  // data ou quantidade
    startDate: undefined,
    endDate: undefined
  }
};
*/

/**
 * Spread with Objetct
 */

// const user = {
//   name: "Marcos",
//   age: 19
// };

// console.log({ 
//   ...user, 
//   location: "Brasil",
//   age: 17
// });
