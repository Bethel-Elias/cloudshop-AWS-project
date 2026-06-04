const db = require("../config/db");

// GET ALL CART ITEMS
const getAll = (callback) => {
  db.query(
    `SELECT cart.id, products.name, products.price, cart.quantity
     FROM cart
     JOIN products ON cart.product_id = products.id`,
    callback
  );
};

// ADD ITEM TO CART
const add = (product_id, quantity, callback) => {
  db.query(
    "INSERT INTO cart (product_id, quantity) VALUES (?, ?)",
    [product_id, quantity],
    callback
  );
};

// DELETE ITEM
const remove = (id, callback) => {
  db.query("DELETE FROM cart WHERE id = ?", [id], callback);
};

module.exports = {
  getAll,
  add,
  remove,
};
