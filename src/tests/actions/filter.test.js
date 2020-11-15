import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../store/actions/filters';
import moment from 'moment';

// Text Filter
test('deve gerar filtro de texto', () => {
  const text = 'something';
  const action = setTextFilter(text);
  expect(action).toEqual({ type: 'SET_TEXT_FILTER', text });
});

test('deve gerar filtro de texto padrão', () => {
  const action = setTextFilter();
  expect(action).toEqual({ 
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

// Sot by Date
test('deve gerar ordem de por data', () => {
  const action = sortByDate();
  expect(action).toEqual({ type: 'SORT_BY_DATE' });
});

// Sort by Amount
test('deve gerar ordem por quantidade', () => {
  const action = sortByAmount();
  expect(action).toEqual({ type: 'SORT_BY_AMOUNT' });
});

// Set Start Date
test('deve setar data inicial', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

//Set End Date
test('deve setar data final', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});