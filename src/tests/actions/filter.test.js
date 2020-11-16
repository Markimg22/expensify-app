import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../store/actions/filters';
import moment from 'moment';

// Text Filter
test('must generate text filter with the text provided.', () => {
  const text = 'something';
  const action = setTextFilter(text);
  expect(action).toEqual({ type: 'SET_TEXT_FILTER', text });
});

test('must generate text filter with default value.', () => {
  const action = setTextFilter();
  expect(action).toEqual({ type: 'SET_TEXT_FILTER', text: '' });
});

// Sot by Date
test('should generate sort by date.', () => {
  const action = sortByDate();
  expect(action).toEqual({ type: 'SORT_BY_DATE' });
});

// Sort by Amount
test('should generate sort by amount.', () => {
  const action = sortByAmount();
  expect(action).toEqual({ type: 'SORT_BY_AMOUNT' });
});

// Set Start Date
test('should setup start date.', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

//Set End Date
test('should setup end date.', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});