const Cart = require("../models/cartModel");

// GET /api/cart
const getCart = (req, res) => {
  Cart.getAll((err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

// POST /api/cart
const addToCart = (req, res) => {
  const { product_id, quantity } = req.body;

  Cart.add(product_id, quantity, (err, result) => {
    if (err) return res.status(500).json(err);

    res.status(201).json({
      message: "Item added to cart",
      id: result.insertId,
    });
  });
};

// DELETE /api/cart/:id
const deleteCartItem = (req, res) => {
  const id = req.params.id;

  Cart.remove(id, (err) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Item removed from cart" });
  });
};

module.exports = {
  getCart,
  addToCart,
  deleteCartItem,
};
