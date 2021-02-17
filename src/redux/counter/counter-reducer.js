import { combineReducers } from 'redux';
import types from './counetr-types';

function valueReducer(state = 0, action) {
  const { type, payload } = action;

  switch (type) {
    case types.INCREMENT:
      return state + payload;
    case types.DECREMENT:
      return state - payload;
    default:
      return state;
  }
}

function stepReducer(state = 5, action) {
  const { type, payload } = action;

  switch (type) {
    case types.CHANGE_STEP:
      return payload;
    default:
      return state;
  }
}

const counterReducer = combineReducers({
  value: valueReducer,
  step: stepReducer,
});

export default counterReducer;
