import React from 'react';
import { connect } from 'react-redux';

const Value = ({ value }) => <span className="Counter__value">{value}</span>;

const mapStateToProps = state => {
  return {
    value: state.counter.value,
  };
};

export default connect(mapStateToProps, null)(Value);
