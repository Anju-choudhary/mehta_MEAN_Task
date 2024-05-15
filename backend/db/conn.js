const { Sequelize } = require("sequelize");

// Create a Sequelize instance and connect to the database
const sequelize = new Sequelize(
  "postgres://postgres:Anju@1234@localhost:5432/testDb",
  {
    logging: console.log,
  }
);

// to se authenticated or not
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection to the database has been established successfully");
  })
  .catch((err) => console.log("Unable to connect to the databse:", err));

sequelize
  .sync()
  .then(() => {
    console.log("database synced");
  })
  .catch((err) => console.log("Error syncing databse:", err));
module.exports = sequelize;
