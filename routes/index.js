var express = require('express');
var router = express.Router();
let todosCtrl = require('../controllers/todosCtrl.js')

let todosModel = require('../models/todosModel.js')

router.get('/', function(req, res, next) {
  
  res.render('index.ejs', {
    title: 'unit2',
    todoArray: todosModel.todos,
  }
  )
  //res.render('index.ejs', { title: 'Unit 2 Assessment' });
});

router.post('/submission', todosCtrl.submitted)

module.exports = router;
