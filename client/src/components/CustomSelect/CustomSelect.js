import React from 'react';

const CustomSelect = props => {
  return (
    <div className="form-group">
      <label>Expense Category</label>
      <select className="custom-select" {...props}>
        {props.data.map(function(expense) {
          return <option key = {expense.id} value={expense.id}>{expense.category}</option>
        })}
      </select>
    </div>
  );
};

export default CustomSelect;
