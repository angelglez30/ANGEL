import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products, onAddToCart }) {
  if (!products) {
    return <div>Cargando productos...</div>;
  }
  if (products.length === 0) {
    return <p>No hay productos disponibles</p>;
  }
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;
