const express = require("express");
const router = express.Router();

const product = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 1999,
    category: "Electronics",
    rating: { rate: 4.5 }
  },
  {
    id: 2,
    title: "Men's Jacket",
    price: 2999,
    category: "Fashion",
    rating: { rate: 4.2 }
  },
  {
    id: 3,
    title: "Smart Watch",
    price: 4999,
    category: "Electronics",
    rating: { rate: 4.7 }
  }
];

router.get("/", (req,res)=> {
    res.json(product);
});

module.exports = router;