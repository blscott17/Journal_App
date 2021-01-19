let express = require('express');
let router = express.Router();
// const nodemon = require('nodemon');
// const router = require('./usercontroller');

router.post('/add', function (req, res) {
  console.log('Hey from calc');
  let number1 = req.body.num1;
  let number2 = req.body.num2;
  let obj = { total: number1 + number2 };
  res.json(obj);
});
// OR res.json({total: number1 + number2});
module.exports = router;
