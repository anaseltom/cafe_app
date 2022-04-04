const express = require("express");
const moment = require("moment");
const { Op } = require("sequelize");
const { Order } = require("../SQL/models");

const router = express.Router();

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

router.get("/year", async (req, res) => {
  const order = await Order.findAll({
    where: {
      createdAt: {
        [Op.gte]: moment().subtract(365, "days").toDate(),
      },
    },
  });
  res.status(200).send(order);
});

router.get("/orders", async (req, res) => {
  const order = await Order.findAll({
    limit: 10,
    order: [["createdAt", "DESC"]],
  });
  res.status(200).send(order);
});

router.get("/day", async (req, res) => {
  const order = await Order.findAll({
    where: {
      createdAt: {
        [Op.gte]: moment().subtract(1, "days").toDate(),
        [Op.lte]: moment().toDate(),
      },
    },
  });
  res.status(200).send(order);
});

router.get("/chart", async (req, res) => {
  try {
    const jan = await Order.findAll({
      where: {
        createdAt: {
          [Op.gte]: moment()
            .set("month", 0)
            .set("date", 1)
            .set("hour", 02)
            .set("minute", 00)
            .set("second", 01)
            .toDate(),
          [Op.lte]: moment()
            .set("month", 1)
            .set("date", 1)
            .set("hour", 02)
            .set("minute", 00)
            .set("second", 01)
            .toDate(),
        },
      },
    });
    const feb = await Order.findAll({
      where: {
        createdAt: {
          [Op.gte]: moment()
            .set("month", 1)
            .set("date", 1)
            .set("hour", 02)
            .set("minute", 00)
            .set("second", 01)
            .toDate(),
          [Op.lt]: moment()
            .set("month", 2)
            .set("date", 1)
            .set("hour", 02)
            .set("minute", 00)
            .set("second", 01)
            .toDate(),
        },
      },
    });
    const mar = await Order.findAll({
      where: {
        createdAt: {
          [Op.gte]: moment()
            .set("month", 2)
            .set("date", 1)
            .set("hour", 02)
            .set("minute", 00)
            .set("second", 01)
            .toDate(),
          [Op.lt]: moment()
            .set("month", 3)
            .set("date", 1)
            .set("hour", 02)
            .set("minute", 00)
            .set("second", 01)
            .toDate(),
        },
      },
    });
    const apr = await Order.findAll({
      where: {
        createdAt: {
          [Op.gte]: moment()
            .set("month", 3)
            .set("date", 1)
            .set("hour", 02)
            .set("minute", 00)
            .set("second", 01)
            .toDate(),
          [Op.lt]: moment()
            .set("month", 4)
            .set("date", 1)
            .set("hour", 02)
            .set("minute", 00)
            .set("second", 01)
            .toDate(),
        },
      },
    });
    const may = await Order.findAll({
      where: {
        createdAt: {
          [Op.gte]: moment()
            .set("month", 4)
            .set("date", 1)
            .set("hour", 02)
            .set("minute", 00)
            .set("second", 01)
            .toDate(),
          [Op.lt]: moment()
            .set("month", 5)
            .set("date", 1)
            .set("hour", 02)
            .set("minute", 00)
            .set("second", 01)
            .toDate(),
        },
      },
    });
    const jun = await Order.findAll({
      where: {
        createdAt: {
          [Op.gte]: moment()
            .set("month", 5)
            .set("date", 1)
            .set("hour", 02)
            .set("minute", 00)
            .set("second", 01)
            .toDate(),
          [Op.lt]: moment()
            .set("month", 6)
            .set("date", 1)
            .set("hour", 02)
            .set("minute", 00)
            .set("second", 01)
            .toDate(),
        },
      },
    });
    const jul = await Order.findAll({
      where: {
        createdAt: {
          [Op.gte]: moment()
            .set("month", 6)
            .set("date", 1)
            .set("hour", 02)
            .set("minute", 00)
            .set("second", 01)
            .toDate(),
          [Op.lt]: moment()
            .set("month", 7)
            .set("date", 1)
            .set("hour", 02)
            .set("minute", 00)
            .set("second", 01)
            .toDate(),
        },
      },
    });
    const aug = await Order.findAll({
      where: {
        createdAt: {
          [Op.gte]: moment()
            .set("month", 7)
            .set("date", 1)
            .set("hour", 02)
            .set("minute", 00)
            .set("second", 01)
            .toDate(),
          [Op.lt]: moment()
            .set("month", 8)
            .set("date", 1)
            .set("hour", 02)
            .set("minute", 00)
            .set("second", 01)
            .toDate(),
        },
      },
    });
    const sep = await Order.findAll({
      where: {
        createdAt: {
          [Op.gte]: moment()
            .set("month", 8)
            .set("date", 1)
            .set("hour", 02)
            .set("minute", 00)
            .set("second", 01)
            .toDate(),
          [Op.lt]: moment()
            .set("month", 9)
            .set("date", 1)
            .set("hour", 02)
            .set("minute", 00)
            .set("second", 01)
            .toDate(),
        },
      },
    });
    const oct = await Order.findAll({
      where: {
        createdAt: {
          [Op.gte]: moment()
            .set("month", 9)
            .set("date", 1)
            .set("hour", 02)
            .set("minute", 00)
            .set("second", 01)
            .toDate(),
          [Op.lt]: moment()
            .set("month", 10)
            .set("date", 1)
            .set("hour", 02)
            .set("minute", 00)
            .set("second", 01)
            .toDate(),
        },
      },
    });
    const nov = await Order.findAll({
      where: {
        createdAt: {
          [Op.gte]: moment()
            .set("month", 10)
            .set("date", 1)
            .set("hour", 02)
            .set("minute", 00)
            .set("second", 01)
            .toDate(),
          [Op.lt]: moment()
            .set("month", 11)
            .set("date", 1)
            .set("hour", 02)
            .set("minute", 00)
            .set("second", 01)
            .toDate(),
        },
      },
    });
    const dec = await Order.findAll({
      where: {
        createdAt: {
          [Op.gte]: moment()
            .set("month", 11)
            .set("date", 1)
            .set("hour", 02)
            .set("minute", 00)
            .set("second", 01)
            .toDate(),
          [Op.lt]: moment()
            .set("month", 12)
            .set("date", 1)
            .set("hour", 02)
            .set("minute", 00)
            .set("second", 01)
            .toDate(),
        },
      },
    });
    let janSales = 0;
    let febSales = 0;
    let marSales = 0;
    let aprSales = 0;
    let maySales = 0;
    let junSales = 0;
    let julSales = 0;
    let augSales = 0;
    let sepSales = 0;
    let octSales = 0;
    let novSales = 0;
    let decSales = 0;

    jan.map((elem) => {
      janSales += elem.total;
    });
    feb.map((elem) => {
      febSales += elem.total;
    });
    mar.map((elem) => {
      marSales += elem.total;
    });
    apr.map((elem) => {
      aprSales += elem.total;
    });
    may.map((elem) => {
      maySales += elem.total;
    });
    jun.map((elem) => {
      junSales += elem.total;
    });
    jul.map((elem) => {
      julSales += elem.total;
    });
    aug.map((elem) => {
      augSales += elem.total;
    });
    sep.map((elem) => {
      sepSales += elem.total;
    });
    oct.map((elem) => {
      octSales += elem.total;
    });
    nov.map((elem) => {
      novSales += elem.total;
    });
    dec.map((elem) => {
      decSales += elem.total;
    });
    res
      .status(200)
      .send([
        janSales,
        febSales,
        marSales,
        aprSales,
        maySales,
        junSales,
        julSales,
        augSales,
        sepSales,
        octSales,
        novSales,
        decSales,
      ]);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
