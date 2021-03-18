const path = require("path");
const router = require("express").Router();

//every route needs to go ahead of app.get('*') or else it /// won't work
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/landing.html"));
});

module.exports = router;