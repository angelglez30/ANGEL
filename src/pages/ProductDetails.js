import React from "react";
import { useParams } from "react-router-dom";
import useProductData from "../hooks/useProductData";

function ProductDetails() {
  const { id } = useParams(); // Obtiene el ID del producto de la URL
  const products = useProductData();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      {/* Otras características del producto */}
    </div>
  );
}

export default ProductDetails;
