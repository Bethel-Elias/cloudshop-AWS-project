const db = require('../config/db');

const getAllProducts = (callback) => {
  db.query('SELECT * FROM products', callback);
};

const createProduct = (product, callback) => {
  const sql = `
    INSERT INTO products (name, price, description)
    VALUES (?, ?, ?)
  `;

  db.query(
    sql,
    [product.name, product.price, product.description],
    callback
  );
};

module.exports = {
  getAllProducts,
  createProduct
};



// ```javascript
// const mongoose = require('mongoose');

// const productSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   price: {
//     type: Number,
//     required: true
//   },
//   description: {
//     type: String
//   }
// });

// module.exports = mongoose.model('Product', productSchema);