// const Groups = require("./group.js");

module.exports = function (sequelize, DataTypes) {
  const Passengers = sequelize.define("Passengers", {

    name: {
      type: DataTypes.STRING
    },

    isGroupLeader: {
      type: DataTypes.BOOLEAN
    },

    discountCredit: {
      type: DataTypes.DOUBLE
    },

    hasSplitCredit: {
      type: DataTypes.STRING
    },

    balance: {
      type: DataTypes.DOUBLE
    },


    // Two fields below are required to seed data into MySQL when tables are created into my Sequelize, if not you get an error for no default value
    createdAt: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    // underscored: true  

  });


  Passengers.associate = function (models) {
    // A Passenger can't be created without a Group due to the foreign key constraint
    Passengers.belongsTo(models.Groups, {
      foreignKey: {
        allowNull: false,
        underscored: true
      }
    });
  };

  return Passengers;
};
