const path = require("path");
const router = require("express").Router();

//every route needs to go ahead of app.get('*') or else it /// won't work

router.get("/create-acc", (req, res) => {
  console.log("GET /create-acc");
 res.sendFile(path.join(__dirname, "../public/create-acc.html"));   
});

router.get("/user", (req, res) => {
  console.log("GET /user");
  res.sendFile(path.join(__dirname, "../public/userpage.html"));
});

router.get("*", (req, res) => {
  console.log("GET rest *");
  res.sendFile(path.join(__dirname, "../public/landing.html"));
});

module.exports = router;