import React from 'react';

const CustomSelect = props => {
  return (
    <div className="form-group">
      <label>Expense Category</label>
      <select className="custom-select" {...props}>
        <option value="1">Rent/Mortgage</option>
        <option value="2">Utilities</option>
        <option value="3">Car/Transportation</option>
        <option value="4">Food/Dining</option>
        <option value="5">Credit Cards</option>
        <option value="6">Loans</option>
        <option value="7">Medical/Health</option>
        <option value="8">Other</option>
      </select>
    </div>
  );
};

export default CustomSelect;
