const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
 sequelize.define("mesa", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    unique: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
  },
  disponible: {
    type: DataTypes.BOOLEAN,
  },
});
}