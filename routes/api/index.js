const router = require("express").Router();

const userRoutes = require('./user-routes');
const selectedRoutes = require('./selected-routes');
const { route } = require("..");

route.use('/user', userRoutes);
route.use('/selected', selectedRoutes);

module.exports = router;
