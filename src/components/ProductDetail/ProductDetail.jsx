// ProductDetail.jsx
import React, { useEffect, useState } from "react";
import { useProductContext } from "../../context/ProductContext";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [quantityInput, setQuantityInput] = useState(null);

  const { selectedProduct, fetchProductById, setSelectedProduct } =
    useProductContext();
  const { productId } = useParams();
  useEffect(() => {
    fetchProductById(productId, setSelectedProduct);
  }, [productId]);

  return (
    <>
      {selectedProduct ? (
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start text-center alin mx-auto max-w-screen-xl px-5 py-10 my-10 gap-20">
          <div className="w-3/6">
            <img className="" src={selectedProduct.image} />
          </div>

          <div className="w-3/6 py-3">
            <h1 className="text-start text-2xl md:text-5xl leading-6 md:leading-relaxed font-bold font-serif">
              {selectedProduct.title}
            </h1>

            <h1 className="text-start text-2xl md:text-lg leading-6 md:leading-relaxed font-medium font-serif">
              {selectedProduct.category}
            </h1>

            <div className="flex items-center py-4">
              <div className="flex items-center text-yellow-500">
                {[1, 2, 3, 4, 5].map((index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 fill-current ${
                      index <= Math.ceil(selectedProduct.rating.rate)
                        ? "text-orange-600"
                        : "text-gray-300"
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0l2.45 6.41h6.29l-5 4.82 1.82 6.02L10 12.47 3.44 17.25l1.82-6.02-5-4.82H7.55L10 0z"
                    />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-gray-500 text-sm">
                {selectedProduct.rating.rate} ({selectedProduct.rating.count}{" "}
                reviews)
              </span>
            </div>

            <h3 className="text-start text-2xl md:text-2xl leading-6 md:leading-relaxed font-bold font-serif py-3">
              {" "}
              Price:{" "}
              <span className="text-2xl md:text-3xl">
                {selectedProduct.price}{" "}
              </span>
            </h3>

            <p className="text-1xl font-normal font-sans text-left leading-7">
              {selectedProduct.description}
            </p>

            <div className="flex flex-col md:flex-row justify-start gap-20 md:items-center py-5">
              <div className="flex flex-row gap-5 justify-center items-center border border-gray-500 py-1 px-5 rounded-lg">
                <span className="text-4xl font-bold">-</span>
                <input
                  className="max-w-10 border border-gray-100  mt-2 text-center text-xl"
                  type="text"
                  value={quantityInput}
                />
                <span className="text-4xl font-bold">+</span>
              </div>

              <div>
                <button className="text-xl font-bold border border-gray-500 py-1 px-5 rounded-lg">
                  {" "}
                  Add to cart{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default ProductDetail;
