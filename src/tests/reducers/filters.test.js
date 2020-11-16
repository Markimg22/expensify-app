import filtersReducer from '../../store/reducers/filters';
import moment from 'moment';

// default filter
test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

// set text filter
test('should set text filter', () => {
  const text = 'This is my filter';
  const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text });
  expect(state.text).toBe(text);
});

// sortBy date
test('should set sortBy to date', () => {
  const sortBy = 'date';
  const state = filtersReducer(undefined, { type: 'SORT_BY_DATE', sortBy });
  expect(state.sortBy).toBe(sortBy);
});

// sortBy amount
test('should set sortBy to amount', () => {
  const sortBy = 'amount';
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT', sortBy });
  expect(state.sortBy).toBe(sortBy);
});

// set startDate
test('should set startDate filter', () => {
  const startDate = moment();
  const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate });
  expect(state.startDate).toBe(startDate);
});

// set endDate
test('should set endDate filter', () => {
  const endDate = moment();
  const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate });
  expect(state.endDate).toBe(endDate);
});