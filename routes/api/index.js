const router = require("express").Router();

const userRoutes = require('./user-routes.js');
const selectedRoutes = require('./selected-routes');
// const { route } = require("..");

router.use('/user', userRoutes);
router.use('/selected', selectedRoutes);

module.exports = router;
