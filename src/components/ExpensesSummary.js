import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../store/selectors/expenses';
import selectExpensesTotal from '../store/selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expenseTotal }) => (
  <div>
    <h1>
      Viewing {expenseCount} expense(s),
      totalling {numeral(expenseTotal / 100).format('$0,0.00')}
    </h1>
  </div>
);

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expenseTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);