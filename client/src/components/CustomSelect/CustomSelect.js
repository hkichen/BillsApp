import React from 'react';

const CustomSelect = props => {
  return (
    <div className="form-group">
      <label>Expense Category</label>
      <select className="custom-select" {...props}>
        <option value="Rent/Mortgage">Rent/Mortgage</option>
        <option value="Utilities">Utilities</option>
        <option value="Car/Transportation">Car/Transportation</option>
        <option value="Food/Dining">Food/Dining</option>
        <option value="Credit Cards">Credit Cards</option>
        <option value="Loans">Loans</option>
        <option value="Medical/Health">Medical/Health</option>
        <option value="Other">Other</option>
      </select>
    </div>
  );
};

export default CustomSelect;
