const express = require("express");
const { Category } = require("../SQL/models");
const { getValidate, postValidate } = require("../validation/category");
const validate = require("express-joi-validate");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).send(categories);
  } catch (error) {
    res.status(500).send("internal server error");
  }
});

router.get("/:id", validate(getValidate), async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findOne({ where: { id } });
    res.status(200).send(category);
  } catch (error) {
    res.status(500).send("internal server error");
  }
});

router.post("/", validate(postValidate), async (req, res) => {
  const { name_en, name_ar } = req.body;

  try {
    const category = await Category.create({
      name_en,
      name_ar,
    });
    res.status(200).send(category);
  } catch (error) {
    res.status(500).send("internal server error");
  }
});

router.put("/:id", validate(postValidate), async (req, res) => {
  const { name_en, name_ar } = req.body;
  const { id } = req.params;

  try {
    const category = await Category.findOne({ where: { id } });
    if (!category) {
      return res.status(400).send("category with given id not found");
    }
    category.name_en = name_en;
    category.name_ar = name_ar;
    await category.save();
    res.status(200).send(category);
  } catch (error) {
    res.status(500).send("internal server error");
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const category = await Category.findOne({ where: { id } });
    if (!category) {
      return res.status(404).send("category with given id not found");
    }
    const deleted = await Category.destroy({ where: { id } });
    res.sendStatus(200).send(deleted);
  } catch (error) {
    res.status(500).send("internal server error");
  }
});

module.exports = router;
