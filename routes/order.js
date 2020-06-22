var express = require('express');
var router = express.Router();
var OrderModel = require('../models/order.model');
var createError = require('http-errors');

orders = []

router.post('/', function(req, res, next) {
  if (req.body) {
    try{      
      const newOrder = new OrderModel(req.body)
      newOrder.save(err => {
        if (err) {
          console.error(err)
          return res.send(createError(500))
        };
        
        return  res.send()
      });
    }catch (e) {
      console.log(e);
      return res.send(createError(500))
    }
  }
 
});

router.get('/', async (req, res, next) => {
  const items = await OrderModel.find({}).lean().exec();
  res.send(items);
});

module.exports = router;