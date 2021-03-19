const { Selected } = require('../models');

const selectedData = [
  {
    sport: "Soccer",
    league: "English Premier League",
    team: "Everton FC",
    user_id: 1,
  },
  {
    sport: "Soccer",
    league: "English Premier League",
    team: "Manchester United FC",
    user_id: 2,
  },
];

const seedSelected = () => Selected.bulkCreate(selectedData);

module.exports = seedSelected;