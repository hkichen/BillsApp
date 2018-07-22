import React from 'react';

const Checkbox = props => {
  return (
    <div className="form-check form-control">
      <input className="form-check-input" {...props} />
      <label className="form-check-label">Auto Pay</label>
    </div>
  );
};

export default Checkbox;
