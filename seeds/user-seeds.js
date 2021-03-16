const { User } = require('../models');

const userData = [
  {
    username: "daveyrojo",
    email: "dave@gmail.com",
    about_me: "I love soccer!",
    password: "password123",
  },
  {
    username: "bobrossrules",
    email: "bobbyboi@gmail.com",
    about_me: "I paint better than Messi plays footy!",
    password: "idk123456789",
  }
];

const seedUser = () => User.bulCreate(userData);

module.exports = seedUser;