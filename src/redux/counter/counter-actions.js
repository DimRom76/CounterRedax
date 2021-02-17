import types from './counetr-types';

const counterIncrement = value => ({
  type: types.INCREMENT,
  payload: value,
});

const counterDecrement = value => ({
  type: types.DECREMENT,
  payload: value,
});

const counterChangeStep = step => ({
  type: types.CHANGE_STEP,
  payload: step,
});

export default { counterIncrement, counterDecrement, counterChangeStep };
