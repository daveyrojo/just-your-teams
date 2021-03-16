const { Selected } = require('../models');

const selectedData = [
  {
    sport: "Soccer",
    league: "English Premier League",
    team: "Everton",
    user_id: 1,
  },
  {
    sport: "Soccer",
    league: "English Premier League",
    team: "Manchester United",
    user_id: 2,
  },
];

const seedSelected = () => User.bulkCreate(selectedData);

module.exports = seedSelected;