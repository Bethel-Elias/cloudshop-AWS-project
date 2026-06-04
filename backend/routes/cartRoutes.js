const express = require("express");
const router = express.Router();

const {
  getCart,
  addToCart,
  deleteCartItem,
} = require("../controllers/cartController");

router.get("/", getCart);
router.post("/", addToCart);
router.delete("/:id", deleteCartItem);

module.exports = router;
