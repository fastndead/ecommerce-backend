var express = require('express');
var router = express.Router();

const items = [
  {
      id: 1,
      name: "Garden Chairs",
      category: "Chair",
      rating: 1,
      price: 150,
      image:'product-image-1'
  },
  {
      id:2,
      name: "Penemille",
      category: "Chair",
      rating: 5,
      price: 90,
      image:'product-image-2'
  },
  {
      id:3,
      name: "Clock",
      category: "Table clock",
      rating: 3,
      price: 15000,
      image:'product-image-3'
  },
  {
      id:4,
      name: "Kappu",
      category: "Shelves",
      rating: 2,
      price: 920,
      image:'product-image-4'
  },
  {
      id:5,
      name: "Penemille",
      category: "Chair",
      rating: 4,
      price: 9210,
      image:'product-image-5'
  },
  {
      id:6,
      name: "Kitchen Shelves",
      category: "Shelves",
      rating: 2,
      price: 90,
      image:'product-image-6'
  },
  {
      id:7,
      name: "Penemille",
      category: "Chair",
      rating: 4,
      price: 91230,
      image:'product-image-7'
  }
]


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(items);
});

module.exports = router;
