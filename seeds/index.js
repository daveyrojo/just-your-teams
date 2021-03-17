const seedUser = require("./user-seeds");
const seedSelected = require("./selected-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n------DB SYNCED------\n");

  await seedUser();
  console.log("\n------USER SEEDED------\n");

  await seedSelected();
  console.log("\n------SELECTED SPRTS/LGS/TMS SEEDED------\n");

  process.exit(0);
};

seedAll();
