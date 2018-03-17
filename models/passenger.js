// const Groups = require("./group.js");

module.exports = function(sequelize, DataTypes) {
    var Passengers = sequelize.define("Passengers", {
      
    group_name: {type: DataTypes.STRING},

    tour_name: {type: DataTypes.STRING},

    tour_code: {type: DataTypes.STRING,},

    departure_date: {type: DataTypes.STRING},  

    invoice: {type: DataTypes.INTEGER},

    pax_name: {type: DataTypes.STRING},

    payments: {type: DataTypes.INTEGER},

    balance: {type: DataTypes.INTEGER,},

    due_date: {type: DataTypes.STRING}, 

    isGroupLeader: {type: DataTypes.BOOLEAN}, 

    total_group_credit: {type: DataTypes.INTEGER},

    hasGroupCredit: {type: DataTypes.BOOLEAN}, 

    group_credit_shared: {type: DataTypes.BOOLEAN},

    group_credit_split: {type: DataTypes.STRING},

    group_credit_amt: {type: DataTypes.INTEGER},
    
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

  
    Passengers.associate = function(models) {
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


