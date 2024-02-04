// ProductDetail.jsx
import React, { useEffect } from "react";
import { useProductContext } from "../../context/ProductContext";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { selectedProduct, fetchProductById } = useProductContext();
  const { productId } = useParams();
  useEffect(() => {
    // Fetch product details using the productId
    fetchProductById(productId);
  }, [fetchProductById, productId]);

  return (
    <>
      {selectedProduct ? (
        <div>
          <h1>{selectedProduct.title}</h1>
          {/* Render other details of the selected product */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default ProductDetail;
