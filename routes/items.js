var express = require('express');
var ItemModel = require('../models/item.model');
var router = express.Router();

/* GET users listing. */
router.get('/', async (req, res, next) => {
  var items = await ItemModel.find({}).lean().exec();
  res.send(items);
});

module.exports = router;
