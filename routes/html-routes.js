const path = require("path");
const router = require("express").Router();
//every route needs to go ahead of app.get('*') or else it /// won't work

router.get("/create-acc", (req, res) => {
 res.sendFile(path.join(__dirname, "../views/create-acc.html"));   
});

router.get("/user", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/userpage.html"));
});

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/landing.html"));
});

module.exports = router;