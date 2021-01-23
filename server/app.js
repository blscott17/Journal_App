// modue 10.10 Add the import of dotenv first in this file
require('dotenv').config();
let express = require('express');
let app = express();
const sequelize = require('./db');

const user = require('./controllers/usercontroller');
let journal = require('./controllers/journalcontroller');
let calc = require('./controllers/calculatorcontroller');

sequelize.sync();
//sequelize.sync({force: true})
app.use(require('./middleware/headers'));
app.use(express.json());
app.use('/journal', journal);
app.use('/about', journal);
app.use('/user', user);

app.use('/calculator', calc);

//create a listening port to communicate with the server using a callback function
//(process.env.port) in place of 3000
// `app is listening on port ${process.env.port})`;
app.listen(3000, function () {
  console.log('app is listening on port 3000');
});

//NOTES FOR THIS MODULE

// to add new endpoints (1) create a router in a new controller,
// (2) in the Main(SERVER ENTRYPOINT (app.js in this case), which is
// listed in package.json), import the route object that we just
// created in the new controller and store it in a variable.
// (3) add code similar to this: // app.use('/calculator', calc);
// syntax: app.use(endpoint, callback function)
//
// WHERE TO VALIDATE
// We call upon the use() method from the Express framework and create a
// route to access any future functions in our usercontroller.js. The
// string, '/user', is setting up the endpoint our URL will need to
// include to access a controller. The user variable is the same
// variable we created on line 22 for user and line 27 for calc,
// and specifies which controller this endpoint is connected to.
// Below is the exposed route which we will continue to use because
// there are a few routes in the journalcontroller we will want
// exposed to all users.
//
// Just to show how to use a protected route, we will not be using this,
// instead we will inject it directly into a route(s) in the controller.
// We will assign a variable called validateSession and import the
// validate-session middleware. We will also inject the validateSession
// variable as a middleware function in the '/practice' route in the
// journalcontroller. It will check to see if the incoming request
// has a token for this specific route.
// app.use(require('./middleware/validate-session'));
// For testing the line above app.use(require...) was places just before
// app.use('/journal', journal); and app.Listen...
