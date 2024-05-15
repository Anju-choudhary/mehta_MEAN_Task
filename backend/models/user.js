const { DataTypes } = require("sequelize");
const sequelize = require("../db/conn");
const bcrypt = require("bcrypt");

// Define the User model
const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// User.findOne({ where: { username: 'anju' } })
// .then(user => {
//   if (user) {
//     console.log('User found:', user.toJSON());
//   } else {
//     console.log('User not found');
//   }
// })
// .catch(err => {
//   console.error('Error finding user:', err);
// });


// Hash the password before creating the user
User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(user.password, salt);
  user.password = hashedPassword;
});

module.exports = User;
