const router = require("express").Router();
const { Selected } = require("../../models");

//URL: /api/selected
router.post("/", async (req, res) => {
  console.log("POST api/selected");
  try {
    const selected = await Selected.create({
      sport: req.body.sport,
      league: req.body.league,
      team: req.body.team,
    });

    res.json(selected);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
