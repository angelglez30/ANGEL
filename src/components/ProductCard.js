import React from "react";
import "../styles/main.css";

function ProductCard({ product, onAddToCart }) {
  if (!product) {
    return <div>Cargando detalles del producto...</div>;
  }

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-card__image"
      />
      <h3 className="product-card__title">{product.name}</h3>
      <p className="product-card__price">${product.price}</p>
      <div className="product-card__details">
        {product.firma && <p>{product.firma}</p>}
        <p>{product.description}</p>
      </div>
      <button
        className="product-card__add-to-cart"
        onClick={() => onAddToCart(product)}
      >
        Añadir al carrito
      </button>
    </div>
  );
}

export default ProductCard;
