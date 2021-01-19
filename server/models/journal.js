// For notes see server > models > user.js - the only difference is
// we are creating a journal model, rather than a user model and
// the fields we are using are different. Instead of email and password,
// we are creating: title, date, entry, and owner.

module.exports = (sequelize, DataTypes) => {
  const Journal = sequelize.define('journal', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    entry: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    owner: {
      type: DataTypes.INTEGER,
    },
  });
  return Journal;
};
