import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleIncrease = (id) => {
    updateQuantity(id, 'increase');
  };

  const handleDecrease = (id) => {
    updateQuantity(id, 'decrease');
  };

  return (
    
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {cartItems.length > 0 ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <div className="flex-grow">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => handleDecrease(item.id)}
                      className="text-gray-600 bg-gray-200 rounded-full px-2 py-1 mr-2 hover:bg-gray-300"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="text-gray-800">{item.quantity}</span>
                    <button
                      onClick={() => handleIncrease(item.id)}
                      className="text-gray-600 bg-gray-200 rounded-full px-2 py-1 ml-2 hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="text-right mt-4">
                  <p className="text-lg font-semibold">Total: ${ (item.price * item.quantity).toFixed(2) }</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="mt-2 text-sm text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <h3 className="text-2xl font-semibold">Order Total: ${calculateTotal()}</h3>
            <Link to="/checkout">
              <button className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
