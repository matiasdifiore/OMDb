const express= require('express');
const router= express.Router();
const users= require('./users');
const movies= require('./movies');
const auth= require('./auth');

router.use("/auth", auth)
router.use("/users", users)
router.use("/movies", movies)


module.exports = router;