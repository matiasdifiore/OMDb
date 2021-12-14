const express = require("express");
const router = express.Router();
const User = require("../models/User");
const axios = require("axios");
const Sequelize = require("sequelize");

router.get("/", (req, res) => {
  User.findAll()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/:id", (req, res) => {
  if (req.isAuthenticated()) {
    User.findOne({ where: { id: req.params.id } })
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.send(err);
      });
  } else {
    res.sendStatus(401); // no autorizado
  }
});

router.post("/:id/favs/:Title", (req, res) => {
  const { id, Title } = req.params;

  User.update(
    {
      favorites: Sequelize.fn(
        "array_append",
        Sequelize.col("favorites"),
        Title
      ),
    },
    { where: { id: id }, returning: true }
  ).then((user) => {
    res.status(201).send(user[1][0]);
  });
});

router.delete("/:id/favs/:Title", (req, res) => {
  const { id, Title } = req.params;

  User.update(
    {
      favorites: Sequelize.fn(
        "array_remove",
        Sequelize.col("favorites"),
        Title
      ),
    },
    { where: { id: id }, returning: true }
  ).then((user) => {
    console.log(user);
    res.status(201).send(user[1][0]);
  });
});

module.exports = router;
