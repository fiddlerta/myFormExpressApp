var express = require('express');
var router = express.Router();

var customers = {
  "customers": [
    {
      "id": 1,
      "name": "Alice Johnson",
      "email": "alice@example.com",
      "phone": "555-123-4567",
      "favorite_items": ["Chocolate Croissant", "Blueberry Muffin"]
    },
    {
      "id": 2,
      "name": "Bob Smith",
      "email": "bob@example.com",
      "phone": "555-234-5678",
      "favorite_items": ["Cinnamon Roll", "Pumpkin Pie"]
    },
    {
      "id": 3,
      "name": "Carol Davis",
      "email": "carol@example.com",
      "phone": "555-345-6789",
      "favorite_items": ["Baguette", "Almond Danish"]
    },
    {
      "id": 4,
      "name": "David Wilson",
      "email": "david@example.com",
      "phone": "555-456-7890",
      "favorite_items": ["Sourdough Bread", "Apple Turnover"]
    },
    {
      "id": 5,
      "name": "Eve Brown",
      "email": "eve@example.com",
      "phone": "555-567-8901",
      "favorite_items": ["Chocolate Chip Cookie", "Cheese Danish"]
    }
  ]
}


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(customers);
});

module.exports = router;
