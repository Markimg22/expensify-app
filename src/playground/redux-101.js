import { createStore } from "redux";

// Actions Generators - funções que retornam objetos

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});

const setCount = ({ count } = {}) => ({
  type: "SET",
  count
});

const resetCount = () => ({
  type: "RESET"
});

const storeRedux = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };

    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };

    case "SET":
      return {
        count: action.count
      };

    case "RESET":
      return {
        count: 0
      };

    default:
      return state;
  }
});

const unsubscribe = storeRedux.subscribe(() => {
  console.log(storeRedux.getState());
});

storeRedux.dispatch(incrementCount({ incrementBy: 20 }));
storeRedux.dispatch(decrementCount({ decrementBy: 10 }));
storeRedux.dispatch(setCount({ count: 100 }));
storeRedux.dispatch(resetCount());
