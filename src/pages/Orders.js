import React, { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import ReturnsContext from "../context/ReturnsContext";

function Orders() {
  const { orders } = useContext(CartContext);
  const { addReturn, isReturned } = useContext(ReturnsContext);
  const [openOrders, setOpenOrders] = useState({});

  const calculateOrderTotal = (order) => {
    if (!order || !order.products) return 0;
    return order.products.reduce((total, product) => total + product.price, 0);
  };

  const handleOrderClick = (orderId) => {
    setOpenOrders((prevOpenOrders) => ({
      ...prevOpenOrders,
      [orderId]: !prevOpenOrders[orderId],
    }));
  };

  const handleReturnClick = (order) => {
    addReturn(order);
    alert(`Pedido ${order.id} agregado a devoluciones.`);
  };

  return (
    <div className="orders">
      <h2>Pedidos</h2>
      {orders.length === 0 ? (
        <p>No hay pedidos realizados.</p>
      ) : (
        <div>
          <ul>
            {orders.map((order) => (
              <li key={order.id}>
                <div
                  onClick={() => handleOrderClick(order.id)}
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>
                    Pedido {order.id} - {order.date} - Total: $
                    {calculateOrderTotal(order)}
                  </span>
                  <span>{openOrders[order.id] ? "-" : "+"}</span>
                </div>
                {openOrders[order.id] && (
                  <div className="order-details">
                    <h3>Detalles del pedido {order.id}</h3>
                    <ul>
                      {order.products.map((product) => (
                        <li
                          key={product.id}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "10px",
                          }}
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            style={{ maxWidth: "50px", marginRight: "10px" }}
                          />
                          <span>
                            {product.name} - ${product.price}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <p>Total del pedido: ${calculateOrderTotal(order)}</p>
                    {isReturned(order.id) ? (
                      <span style={{ color: "green" }}>Devuelto</span>
                    ) : (
                      <button onClick={() => handleReturnClick(order)}>
                        Realizar devolución
                      </button>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Orders;
