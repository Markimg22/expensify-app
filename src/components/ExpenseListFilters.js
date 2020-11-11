import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByDate, sortByAmount } from "../actions/filters";

const ExpenseListFilters = (props) => (
  <div>
    <input
      type="text"
      value={props.filters.text}
      onChange={event => {
        props.dispatch(setTextFilter(event.target.value));
      }}
    />
    <select 
      value={props.filters.sortBy} 
      onChange={event => {
        switch (event.target.value) {
          case "date":
            props.dispatch(sortByDate());
            break;
          case "amount":
            props.dispatch(sortByAmount());
            break;
        }
      }}
    >
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
);

const mapStateToProps = (state) => ({
  filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilters);