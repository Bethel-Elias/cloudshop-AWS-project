import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";

function Products() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <h1>Products</h1>

      <div className="product-grid">
        {products.map((p) => (
          <div className="product-card" key={p.id}>
            <h3>{p.name}</h3>
            <p>${p.price}</p>
            <p>{p.description}</p>
            <button className="add-btn" onClick={() => addToCart(p)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
