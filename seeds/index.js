const seedUser = require("./user-seeds");
const seedSelected = require("./selected-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n------DB SYNCED------");

  await seedUser();
  console.log("\n------USER SEEDED------");

  await seedSelected();
  console.log("\n------SELECTED SPRTS/LGS/TMS SEEDED------");

  process.exit(0);
};

seedAll();
