module.exports = function (sequelize, DataTypes) {
  const Groups = sequelize.define("Groups", {
    groupName: {
      type: DataTypes.STRING
    },

    tourName: {
      type: DataTypes.STRING
    },

    tourCode: {
      type: DataTypes.STRING
    },

    departureDate: {
      type: DataTypes.STRING
    },

    totalGroupCredit: {
      type: DataTypes.DOUBLE
    },

    creditLeft: {
      type: DataTypes.DOUBLE
    },

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

  Groups.associate = function (models) {

    Groups.hasMany(models.Passengers, {
      // underscored: true,
      onDelete: "cascade"
    });
  };

  return Groups;
};
