import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = ({ addToCart }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${productId}`)
      .then(response => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [productId]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  if (loading) return <p className="text-center mt-10 text-lg">Loading product details...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">Error loading product details: {error}</p>;

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <img
            className="w-full mt-[10%] h-96 object-cover transform transition-transform duration-500 hover:scale-105 rounded-lg"
            src={product.thumbnail}
            alt={product.title}
          />
          <div className="mt-4 grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`product image ${index + 1}`}
                className="h-20 object-cover rounded-lg border border-gray-200"
              />
            ))}
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-4xl font-extrabold text-gray-900">{product.title}</h2>
          <p className="mt-4 text-gray-600 text-lg">{product.description}</p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <p className="text-lg text-gray-800">
              <strong>Price:</strong> <span className="text-2xl text-blue-600">${product.price}</span>
            </p>
            <p className="text-lg text-gray-800">
              <strong>Rating:</strong> <span className="text-yellow-500">{product.rating} ⭐</span>
            </p>
            <p className="text-lg text-gray-800">
              <strong>Discount:</strong> <span className="text-green-600">{product.discountPercentage}% off</span>
            </p>
            <p className="text-lg text-gray-800">
              <strong>Brand:</strong> {product.brand}
            </p>
            <p className="text-lg text-gray-800">
              <strong>Category:</strong> {product.category}
            </p>
            <p className="text-lg text-gray-800">
              <strong>Minimum Order Quantity:</strong> {product.minimumOrderQuantity}
            </p>
          </div>
          <div className="mt-4 flex flex-wrap space-x-2">
            {product.tags.map((tag, index) => (
              <span
                key={index}
                className="text-sm text-white bg-gray-600 rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
          <button
            onClick={handleAddToCart}
            className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
