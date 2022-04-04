"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init(
    {
      order: { type: DataTypes.TEXT, allowNull: true },
      total: { type: DataTypes.DOUBLE, allowNull: false },
    },
    {
      sequelize,
      tableName: "orders",
      modelName: "Order",
    }
  );
  return Order;
};
