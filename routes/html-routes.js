const path = require("path");
const router = require("express").Router();
<<<<<<< HEAD

//every route needs to go ahead of app.get('*') or else it /// won't work
=======
>>>>>>> 096222fd64cbf99281d857a3c1c3a110aa8d1c5f

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