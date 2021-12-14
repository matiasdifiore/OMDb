const express = require("express");
const router = express.Router();
const passport = require("passport");

const User = require("../models/User");

router.post("/register", (req, res) => {
  User.create(req.body)
    .then((user) => {
      res.status(201).send(user);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send(req.user);
});

router.post("/logout", (req, res) => {
  req.logout();
  res.sendStatus(204);
});

router.get("/me", (req, res) => {
  !req.user ? res.sendStatus(401) : res.send(req.user);
});

module.exports = router;
