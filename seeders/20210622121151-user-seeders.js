"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        name: "fauzan",
        profession: "Autor Micro",
        role: "admin",
        email: "anjingkoid@gmail.com",
        password: await bcrypt.hash("admin", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "febrian",
        profession: "Front End Developer",
        role: "student",
        email: "fauzanfebrian1725@gmail.com",
        password: await bcrypt.hash("12345678", 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
