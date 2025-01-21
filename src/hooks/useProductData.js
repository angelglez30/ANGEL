import { useState, useEffect } from "react";
import productData from "../assets/products.json";

function useProductData() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500)); // Simula latencia
        setProducts(productData);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
        setProducts([]);
      }
    };

    loadProducts();
  }, []);

  return products;
}

export default useProductData;
