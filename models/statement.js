'use strict';
module.exports = (sequelize, DataTypes) => {
  var Statement = sequelize.define('Statement', {
    category: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      notEmpty: true
    },
    description: {
      type: DataTypes.TEXT,
      notEmpty: true
    },
    moneySource: {
      type: DataTypes.STRING,
      notEmpty: true,
    },
    autoPay: {
      type: DataTypes.BOOLEAN,
      notEmpty: true
    },
    img: {
      type: DataTypes.BLOB,
      notEmpty: true
    }
  });
  Statement.associate = function(models) {
    // associations can be defined here
    Statement.belongsTo(models.Expense);
    Statement.belongsTo(models.User);
  };
  return Statement;
};