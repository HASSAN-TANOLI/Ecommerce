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
  const [cart, setCart] = useState("");

  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log(cart);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Function to fetch a single product by ID
  const fetchProductById = async (productId, setSelectedProduct) => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setSelectedProduct(data);
      console.log(selectedProduct);
    } catch (error) {
      console.error("Error fetching selected product:", error);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        selectedProduct,
        fetchProductById,
        setSelectedProduct,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
