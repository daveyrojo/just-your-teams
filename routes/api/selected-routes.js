const router = require("express").Router();

// router.post("/", async (req, res) => {
//   console.log("POST api/selected");
//   try {
//     const selected = await User.create({
//       sport: req.body.sport,
//       league: req.body.league,
//       team: req.body.team,
//     });

//     res.json(selected);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
