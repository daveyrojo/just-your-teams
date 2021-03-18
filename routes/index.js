const router = require("express").Router();
const path = require("path");

const apiRoutes = require("./api");
const htmlRoutes = require("./html-routes.js");


router.use("/api", apiRoutes);
router.use("/", htmlRoutes);


module.exports = router;
