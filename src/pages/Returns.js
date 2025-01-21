import React, { useContext } from "react";
import ReturnsContext from "../context/ReturnsContext";

function Returns() {
  const { returns } = useContext(ReturnsContext);

  const calculateOrderTotal = (order) => {
    if (!order || !order.products) return 0;
    return order.products.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div className="returns">
      <h2>Devoluciones</h2>
      {returns.length === 0 ? (
        <p>No hay devoluciones solicitadas.</p>
      ) : (
        <ul>
          {returns.map((returnedOrder) => (
            <li key={returnedOrder.id}>
              <h3>
                Pedido {returnedOrder.id} - {returnedOrder.date} - Total: $
                {calculateOrderTotal(returnedOrder)}
              </h3>
              <ul>
                {returnedOrder.products.map((product) => (
                  <li
                    key={product.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    {" "}
                    {/* Estilos para alinear imagen y texto */}
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ maxWidth: "50px", marginRight: "10px" }}
                    />{" "}
                    {/* Muestra la imagen */}
                    <span>
                      {product.name} - ${product.price}
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Returns;
