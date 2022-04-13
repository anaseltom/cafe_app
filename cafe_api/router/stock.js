const express = require("express");
const moment = require("moment");
const { Op } = require("sequelize");

const { Order } = require("../SQL/models");

const router = express.Router();

router.get("/day", async (req, res) => {
  const order = await Order.findAll({
    where: {
      createdAt: {
        [Op.gte]: moment()
          .set("hour", 08)
          .set("minute", 00)
          .set("second", 01)
          .toDate(),
        [Op.lte]: moment()
          .set("hour", 27)
          .set("minute", 00)
          .set("second", 01)
          .toDate(),
      },
    },
  });
  res.status(200).send(order);
});

router.get("/week", async (req, res) => {
  const order = await Order.findAll({
    where: {
      createdAt: {
        [Op.gte]: moment().subtract(7, "days").toDate(),
      },
    },
  });
  res.status(200).send(order);
});

router.get("/month", async (req, res) => {
  const order = await Order.findAll({
    where: {
      createdAt: {
        [Op.gte]: moment().subtract(1, "months").toDate(),
      },
    },
  });
  res.status(200).send(order);
});

module.exports = router;
