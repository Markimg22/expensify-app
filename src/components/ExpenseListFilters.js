import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../store/actions/filters';

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null,
  };

  handleSortBy = (event) => {
    if (event.target.value === 'date') {
      this.props.dispatch(sortByDate());
    } 
    else if (event.target.value === 'amount') {
      this.props.dispatch(sortByAmount());
    }
  };

  handleTextFilter = (event) => {
    this.props.dispatch(setTextFilter(event.target.value));
  };

  handleDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };

  render() {
    return (
      <div>
        <input type='text' value={this.props.filters.text} onChange={this.handleTextFilter} />
        <select value={this.props.filters.sortBy} onChange={this.handleSortBy}>
          <option value='date'>Date</option>
          <option value='amount'>Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.handleDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilters);