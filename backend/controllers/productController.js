const Product = require('../models/Product');

const getProducts = (req, res) => {
  Product.getAllProducts((err, results) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }

    res.json(results);
  });
};

const createProduct = (req, res) => {
  Product.createProduct(req.body, (err, result) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }

    res.status(201).json({
      id: result.insertId,
      ...req.body
    });
  });
};

module.exports = {
  getProducts,
  createProduct
};


// ```javascript
// const Product = require('../models/Product');

// const getProducts = async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const createProduct = async (req, res) => {
//   try {
//     const product = new Product(req.body);
//     const savedProduct = await product.save();

//     res.status(201).json(savedProduct);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// module.exports = {
//   getProducts,
//   createProduct
// };