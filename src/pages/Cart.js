import React, { useContext } from "react";
import CartContext from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, completePurchase } = useContext(CartContext);
  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  const handleComprar = () => {
    if (cart.length === 0) {
      alert("El carrito está vacío. Agrega productos antes de comprar.");
      return;
    }
    completePurchase();
    alert("¡Compra realizada!");
  };

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          <ul>
            {cart.map((product) => (
              <li key={product.id}>
                {product.name} - ${product.price}
                <button onClick={() => removeFromCart(product.id)}>
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h3>Total: ${calculateTotal()}</h3>
          </div>
          <button className="cart-buy-button" onClick={handleComprar}>
            Comprar
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
