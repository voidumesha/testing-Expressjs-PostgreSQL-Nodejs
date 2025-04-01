const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

// Define User Model
const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

// Sync model with the database
sequelize.sync()
  .then(() => console.log("✅ Users table created!"))
  .catch((err) => console.error("❌ Error creating table:", err));

module.exports = User;
