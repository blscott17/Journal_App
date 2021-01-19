// First the model is exported to allow Sequelize to create the users table
// with the email and password columns the next time the server connects to
// the database and a user makes a POST request that uses the model.
// We then run an anonymous function that has two parameters: sequelize and
// DataTypes. The function will return the value of what is created by
// sequelize.define.

// We use the sequelize object to call the define method. .define() is a
// Sequelize method that will map model properties in the server file to a
// table in Postgres. You can read more about it here (Links to an external
// site.).
// In the first argument of the define method, we pass in the string user.
// This will become a table called users (IN POSTGRES THE TABLE NAMES ARE
// PLURALIZED).

// The next arguments of the define function (email and password) are
// objects. Any key/value pairs in the following objects will become
// columns of the table. The syntax looks a little weird here. Just know
// that it's an object that we can pass in numerous properties to create
// numerous table columns. This means that "email" and "password" will both
// be columns in our database.

//  DataTypes.STRING is our value for the type property for both "email"
// and "password". Because we define it as a STRING value in the model, any
// information to be held in that column MUST be a string data-type.
// Remember that DataTypes is a parameter in the function brought in
// through Sequelize. You can read more about Sequelize DataTypes at
// https://sequelize.org/master/manual/model-basics.html#data-types
// Although JavaScript is a loosely typed language, Postgres wants to know
// what data types we're adding to each of our columns. Sequelize is making
// us declare the data types that we'll be storing.

// This is an optional property you can add. allowNull: false simply means
// that you will be unable to send null data through. In this case since we
// are dealing with a string data type you will not be able to send an
// empty string through.

// unique: true property is another optional property that means all data
// (in this case all emails) must be unique and you cannot have any
// duplicates. This is something you will often see used when a new user
// signs up to a website.
module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('user', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return User;
};
