const { Sequelize } = require("sequelize");

// Create a new Sequelize instance
const sequelize = new Sequelize("myexpress_db", "void", "12345", {
  host: "localhost", // Change this if your database is hosted elsewhere
  dialect: "postgres", // Tells Sequelize we are using PostgreSQL
});

// Test the connection
sequelize
  .authenticate()
  .then(() => console.log("✅ PostgreSQL connected!"))
  .catch((err) => console.error("❌ Connection error:", err));

module.exports = sequelize;
