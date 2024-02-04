// ProductContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductContext = createContext();

export const useProductContext = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    // Fetch products and setProducts here
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []); // Empty dependency array ensures it runs only once on mount

  // Function to fetch a single product by ID
  const fetchProductById = async (productId) => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setSelectedProduct(data);
    } catch (error) {
      console.error("Error fetching selected product:", error);
    }
  };

  return (
    <ProductContext.Provider
      value={{ products, selectedProduct, fetchProductById }}
    >
      {children}
    </ProductContext.Provider>
  );
};
