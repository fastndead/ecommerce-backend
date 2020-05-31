var express = require('express');
var createError = require('http-errors');
var ItemModel = require('../models/item.model');
var router = express.Router();
  

router.get('/', async (req, res, next) => {
  const items = await ItemModel.find({}).lean().exec();
  res.send(items);
});

router.get('/:id', async (req, res, next) => {
    const item = await ItemModel.findOne({id: req.params.id}).exec();

    if(!item) {
        next(createError(404));
        return;
    }
    res.send(item);
  });

module.exports = router;
