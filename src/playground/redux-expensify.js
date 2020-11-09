import { createStore, combineReducers } from "redux";

// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Exepense Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return console.log("add");
    case "REMOVE_EXPENSE":
      return console.log("remove");
    case "EDIT_EXPENSE":
      return console.log("edit");
    case "SET_TEXT_FILTER":
      return console.log("set text filter");
    case "SORT_BY_DATE":
      return console.log("sort by date");
    case "SORT_BY_AMOUNT":
      return console.log("sort by amount");
    case "SET_START_DATE":
      return console.log("set start date");
    case "SET_END_DATE":
      return console.log("set end date");
    default:
      return state;
  }
};

// Filters Reducer



// Store Creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer
  })
);

console.log(store.getState());

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
