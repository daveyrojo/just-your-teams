const router = require("express").Router();
const path = require("path");

const apiRoutes = require("./api");
const htmlRoutes = require("./html-routes.js");


router.use("/api", apiRoutes);
router.use("/", htmlRoutes);

<<<<<<< HEAD
=======

>>>>>>> 096222fd64cbf99281d857a3c1c3a110aa8d1c5f
module.exports = router;
