import React, { useState, useContext, useEffect } from "react";
import useProductData from "../hooks/useProductData";
import ProductList from "../components/ProductList";
import CartContext from "../context/CartContext";

function Home() {
  const products = useProductData();
  const { addToCart } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchAttribute, setSearchAttribute] = useState("name");

  useEffect(() => {
    if (products && products.length > 0) {
      setFilteredProducts(products);
      setLoading(false);
    }
  }, [products]);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    if (products && products.length > 0) {
      const filtered = products.filter((product) => {
        if (searchAttribute === "price") {
          return product[searchAttribute].toString().includes(term);
        } else {
          return product[searchAttribute]?.toLowerCase().includes(term);
        }
      });
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  };

  const handleAttributeChange = (event) => {
    setSearchAttribute(event.target.value);
  };

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  return (
    <div className="home">
      <h1>Productos Destacados</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar producto..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
        <select
          value={searchAttribute}
          onChange={handleAttributeChange}
          className="search-select"
        >
          <option value="name">Nombre</option>
          <option value="description">Descripción</option>
          <option value="price">Precio</option>
          <option value="firma">Firma</option>
        </select>
      </div>
      {filteredProducts.length === 0 && searchTerm !== "" ? (
        <p>No se encontraron productos que coincidan con la búsqueda.</p>
      ) : (
        <ProductList products={filteredProducts} onAddToCart={addToCart} />
      )}
    </div>
  );
}

export default Home;
