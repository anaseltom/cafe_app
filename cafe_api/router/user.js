const express = require("express");
const bcrypt = require("bcrypt");
const { User } = require("../SQL/models");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send("internal server error");
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({ where: { id } });
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send("internal server error");
  }
});

router.post("/login", async (req, res) => {
  const { login, password } = req.body;
  try {
    const user = await User.findOne({ where: { login } });
    if (!user) return res.status(400).send("invalid username or password");
    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) return res.status(400).send("invalid username or password");
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/", async (req, res) => {
  const { first_name, last_name, email, login, password, role } = req.body;

  try {
    let userFind = await User.findOne({ where: { login } });
    if (userFind) return res.status(400).send("user alredy exists");

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    const user = await User.create({
      first_name,
      last_name,
      email,
      login,
      password: hashed,
      role,
    });
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send("internal server error");
  }
});

router.put("/:id", async (req, res) => {
  const { first_name, last_name, email, login, role } = req.body;
  const { id } = req.params;

  try {
    let user = await User.findOne({ where: { id } });
    if (!user) return res.status(404).send("user doesn't exists");

    let userFind = await User.findOne({ where: { login } });
    if (userFind)
      return res.status(400).send("there is a user with this login");

    user.first_name = first_name;
    user.last_name = last_name;
    user.email = email;
    user.login = login;
    user.role = role;
    user.save();
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send("internal server error");
  }
});

router.put("/pass/:id", async (req, res) => {
  const { oldPassword, password } = req.body;
  const { id } = req.params;

  try {
    let user = await User.findOne({ where: { id } });
    if (!user) return res.status(404).send("user doesn't exists");

    const validPass = await bcrypt.compare(oldPassword, user.password);
    if (!validPass) return res.status(400).send("invalid username or password");

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    user.password = hashed;
    user.save();
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
