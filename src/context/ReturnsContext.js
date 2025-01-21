import React, { createContext, useState } from "react";

const ReturnsContext = createContext();

export const ReturnsProvider = ({ children }) => {
  const [returns, setReturns] = useState([]);
  const [returnedOrderIds, setReturnedOrderIds] = useState(new Set()); // Nuevo estado para los IDs de pedidos devueltos

  const addReturn = (order) => {
    setReturns((prevReturns) => [...prevReturns, order]);
    setReturnedOrderIds((prevIds) => new Set(prevIds.add(order.id))); // Agrega el ID al Set
  };

  const isReturned = (orderId) => {
    return returnedOrderIds.has(orderId); // Verifica si el ID está en el Set
  };

  return (
    <ReturnsContext.Provider value={{ returns, addReturn, isReturned }}>
      {" "}
      {children}
    </ReturnsContext.Provider>
  );
};

export default ReturnsContext;
