// Import the Sequelize package.
const Sequelize = require('sequelize');
const sequelize = new Sequelize('journal-walkthrough', 'postgres', 'password', {
  host: 'localhost',
  dialect: 'postgres',
});

sequelize.authenticate().then(
  function () {
    console.log('Connected to journal-walkthrough postgres database');
  },
  function (err) {
    console.log(err);
  }
);

// Export the module.
module.exports = sequelize;

// db.js module notes
// Option 1: Passing parameters separately
// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
// });

// Option 2: Passing a connection URI
// const sequelize =
// new Sequelize('postgres://user:pass@example.com:5432/dbname');
//
// Use the sequelize variable to access methods. Call the authenticate()
// method. authenticate() returns a promise. Use .then(). Fire a function
// that shows if we're connected. Fire an error if there are any errors.
// OR with Fat Arrow Fuctions, the code in the module above can be written /// as follows:
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
// })
// .catch(err => {
//     console.error('Unable to connect to th database:', err);
// })

/*
app.js
We also need to do some configuration in our app.js file.
Do the following:
1. Create a sequelize variable that imports the db file.
2. Use the variable and call .sync(). This method will ensure that we sync all defined models to the DB.
If you have to alter a model by adding a column it will not show up in PgAdmin. In PgAdmin you must select your table - right click and drop the table. And then rerun nodemon again. 
*/
