const Sequelize = require("sequelize");
const db = require("../config/db");
const bcrypt = require("bcrypt");

class User extends Sequelize.Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }
}

User.init(
  {
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: { isEmail: true },
    },
    password: {
      type: Sequelize.STRING,
      validate: { notEmpty: true },
    },
    salt: {
      type: Sequelize.STRING,
    },
    favorites: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      defaultValue: [],
    },
  },
  { sequelize: db, modelName: "users" }
);

User.beforeCreate((user) => {
  return bcrypt
    .genSalt(10)
    .then((salt) => {
      user.salt = salt;
      return user.hash(user.password, user.salt);
    })
    .then((hash) => {
      user.password = hash;
    });
});

module.exports = User;
