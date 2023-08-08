import { createStore } from "redux";

const initialState = {
  count: 0,
};

const store = createStore((state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state?.count + action?.incrementBy ? action?.incrementBy : 1,
      };
    case "DECREMENT":
      return {
        count: state?.count - action?.decrementBy ? action?.decrementBy : 1,
      };
    case "RESET":
      return {
        count: action.reset,
      };
    default:
      return state;
  }
});

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: "INCREMENT",
  incrementBy: 10,
});

store.dispatch({
  type: "DECREMENT",
  decrementBy: 5,
});

store.dispatch({
  type: "RESET",
  reset: 0,
});
