import React from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/counter/counter-actions';

const Step = ({ step, onChange }) => (
  <div className="step">
    <p>Шаг</p>
    <input type="text" value={step} onChange={onChange} />
  </div>
);

const mapStateToProps = state => {
  return {
    step: state.counter.step,
  };
};

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(actions.counterChangeStep(Number(e.target.value))),
});

export default connect(mapStateToProps, mapDispatchToProps)(Step);
