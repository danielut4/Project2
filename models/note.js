module.exports = function (sequelize, DataTypes) {
  var Note = sequelize.define('Note', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    note_category: DataTypes.STRING,
    heading: DataTypes.STRING,
    text: DataTypes.STRING
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
