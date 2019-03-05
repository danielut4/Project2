module.exports = function (sequelize, DataTypes) {
    var Book = sequelize.define('Book', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      title: DataTypes.STRING,
      category: DataTypes.STRING
    })
  
    Book.associate = function (models) {
      Book.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      })
    }
  
    Book.associate = function (models) {
      Book.hasMany(models.Note, {
        onDelete: 'cascade'
      })
    }
  
    return Book
  }
  