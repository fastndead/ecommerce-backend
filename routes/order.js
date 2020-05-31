var express = require('express');
var router = express.Router();
var OrderModel = require('../models/order.model');
var createError = require('http-errors');

orders = []

router.post('/', function(req, res, next) {
  if (req.body) {
    
      const newOrder = new OrderModel(req.body)
      newOrder.save(err => {
        if (err) return console.error(err);
        res.send(createError(500))
      });
  }
  res.send()
});

module.exports = router;