const express = require("express");

const { Order } = require("../SQL/models");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.status(200).send(orders);
  } catch (error) {
    res.status(500).send("internal server error");
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findOne({ where: { id } });
    res.status(200).send(order);
  } catch (error) {
    res.status(500).send("internal server error");
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findOne({ where: { id } });
    if (!order) return res.status(404).send("order with given id not found");
    const deleted = await Order.destroy({ where: { id } });
    res.sendStatus(200).send(deleted);
  } catch (error) {
    res.status(500).send("internal server error");
  }
});

router.post("/", async (req, res) => {
  let { order, total } = req.body;
  if (order.length === 0) return res.status(400).send("Error");
  try {
    order = JSON.stringify(order);
    console.log(order);
    const orders = await Order.create({ order, total });
    res.status(200).send(orders);
  } catch (error) {
    res.status(500).send("internal server error");
  }
});

module.exports = router;
