import { DataTypes, Model } from "sequelize";
import sequelize from "../connection/sequelize.js";

class Libro extends Model {}

Libro.init(
  {
    codigo: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    autor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado: {
      type: DataTypes.ENUM('disponible', 'alquilado', 'no-apto'),
      defaultValue: 'disponible',
    },
  },
  {
    sequelize,
    modelName: "Libro",
  }
);

export default Libro;