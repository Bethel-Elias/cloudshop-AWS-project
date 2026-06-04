import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="product-card">
              <h3>{item.name}</h3>
              <p>
                ${item.price} x {item.quantity}
              </p>
              <p>{item.description}</p>

              <button
                className="add-btn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          <h2>Total: ${total.toFixed(2)}</h2>

          <button className="add-btn" onClick={clearCart}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
