const { test } = require("node:test");
const sequelize = require("../config/connection");
const { User } = require("../models");

const userData = require("./userData.json");
console.log(userData);

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const testing = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  console.log(testing);
  process.exit(0);
};

seedDatabase();
