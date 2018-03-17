module.exports = function(sequelize, DataTypes) {
    var Groups = sequelize.define("Groups", {
        group_name: {type: DataTypes.STRING},
       
        tour_name: {type: DataTypes.STRING},

        tour_code: {type: DataTypes.STRING},

        departure_date: {type: DataTypes.STRING},

        pax_in_group: {type: DataTypes.INTEGER},
        
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
  
    Groups.associate = function(models) {
      
      Groups.hasMany(models.Passengers, {
        // underscored: true,
        onDelete: "cascade"
      });
    };
  
    return Groups;
  };

