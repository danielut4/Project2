module.exports = function (sequelize, DataTypes) {
  var Note = sequelize.define('Note', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  })

  Note.associate = function (models) {
    Note.belongsTo(models.Book, {
      foreignKey: {
        allowNull: false
      }
    })
  }

  return Note
}
