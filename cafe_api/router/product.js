const express = require("express");
const validate = require("express-joi-validate");

const { Product } = require("../SQL/models");
const { getValidate, postValidate } = "../validation/product";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send("internal server error");
  }
});

router.get("/:id", validate(getValidate), async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findOne({ where: { id } });
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send("internal server error");
  }
});

router.get("/cat/:id", validate(getValidate), async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findAll({ where: { categoryId: id } });
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send("internal server error");
  }
});

router.post("/", validate(postValidate), async (req, res) => {
  const { name_en, name_ar, categoryId, price } = req.body;
  try {
    const product = await Product.create({
      name_en,
      name_ar,
      categoryId,
      price,
    });
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send("internal server error");
  }
});

router.put("/:id", validate(postValidate), async (req, res) => {
  const { name_en, name_ar, categoryId, price } = req.body;
  const { id } = req.params;
  try {
    const product = await Product.findOne({ where: { id } });
    if (!product) {
      return res.status(404).send("product with given id not found");
    }
    product.name_en = name_en;
    product.name_ar = name_ar;
    product.categoryId = categoryId;
    product.price = price;
    product.save();
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send("internal server error");
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findOne({ where: { id } });
    if (!product) {
      return res.status(404).send("category with given id not found");
    }
    const deleted = await Product.destroy({ where: { id } });
    console.log(deleted);
    res.sendStatus(200).send(deleted);
  } catch (error) {
    res.status(500).send("internal server error");
  }
});
module.exports = router;
