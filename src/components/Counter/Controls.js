import React from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/counter/counter-actions';

const Controls = ({ step, onIncrement, onDecrement }) => (
  <div className="Counter__controls">
    <button type="button" onClick={() => onIncrement(step)}>
      Увеличить на {step}
    </button>
    <button type="button" onClick={() => onDecrement(step)}>
      Уменьшить на {step}
    </button>
  </div>
);

const mapStateToProps = state => {
  return {
    step: state.counter.step,
  };
};

const mapDispatchToProps = dispatch => ({
  onIncrement: value => dispatch(actions.counterIncrement(value)),
  onDecrement: value => dispatch(actions.counterDecrement(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
