const { Model, DataTypes } = require("sequelize");

const db = require("../db");

class Cart extends Model {}

Cart.init(
  {},
  {
    sequelize: db,
    modelName: "cart",
  }
);

module.exports = Cart;