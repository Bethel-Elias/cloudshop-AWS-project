


import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";

function Products() {
  const [products, setProducts] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { addToCart } = useCart();

  useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  const getRecommendations = async (productName) => {
    try {
      setSelectedProduct(productName);

      const response = await axios.get(`/api/recommendations/${productName}`);

      setRecommendations(response.data);
    } catch (err) {
      console.error("Recommendation error:", err);
    }
  };

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

            <button
              className="add-btn"
              onClick={() => getRecommendations(p.name)}
              style={{ marginLeft: "10px" }}
            >
              Show Similar
            </button>
          </div>
        ))}
      </div>

      {recommendations.length > 0 && (
        <>
          <h2 style={{ marginTop: "40px" }}>
            Recommended Products for {selectedProduct}
          </h2>

          <div className="product-grid">
            {recommendations.map((item) => (
              <div className="product-card" key={item.name}>
                <h3>{item.name}</h3>

                <p>${item.price}</p>

                <p>Similarity Score: {item.score.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Products;




// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useCart } from "../context/CartContext";

// function Products() {
//   const [products, setProducts] = useState([]);
//   const { addToCart } = useCart();

//   useEffect(() => {
//     axios
//       // .get("http://localhost:5000/api/products")
//       .get("/api/products")
//       .then((res) => setProducts(res.data))
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div className="container">
//       <h1>Products</h1>

//       <div className="product-grid">
//         {products.map((p) => (
//           <div className="product-card" key={p.id}>
//             <h3>{p.name}</h3>
//             <p>${p.price}</p>
//             <p>{p.description}</p>
//             <button className="add-btn" onClick={() => addToCart(p)}>
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Products;
