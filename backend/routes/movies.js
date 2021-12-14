const axios = require("axios");
const express = require("express");
const router = express.Router();

router.get("/search/:search", (req, res) => {
  const search = req.params.search;

  axios
    .get(`https://www.omdbapi.com/?s=${search}&apikey=14f1d798&type=movie`) //obtengo varias movies segun busqueda de search
    .then((movies) => {
      res.status(200).send(movies.data);
    })
    .catch((err) => res.status(400).send(err));
});

router.get("/id/:id", (req, res) => {
  const id = req.params.id;
  axios
    .get(`https://www.omdbapi.com/?i=${id}&apikey=14f1d798&type=movie`) //obtengo movie unica por id
    .then((movie) => {
      res.send(movie.data);
    })
    .catch((err) => res.status(400).send(err));
});

module.exports = router;
