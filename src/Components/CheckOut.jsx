import React, { useState } from 'react';

function CheckOut() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    state: '',
    nation: '',
    district: '',
    pin: '',
    post: '',
    landmark: '',
    paymentMethod: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      alert('Order Placed Successfully');
    });
    console.log(formData);
  };

  return (
    <>
    <div className='h-[100px]'></div>
    <div className="max-w-4xl mx-auto p-4 ">
      <h2 className="text-3xl font-semibold mb-8 text-center">Checkout</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            placeholder="Enter your address"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            placeholder="Enter your state"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Nation</label>
          <input
            type="text"
            name="nation"
            value={formData.nation}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            placeholder="Enter your nation"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">District</label>
          <input
            type="text"
            name="district"
            value={formData.district}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            placeholder="Enter your district"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">PIN Code</label>
          <input
            type="text"
            name="pin"
            value={formData.pin}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            placeholder="Enter your PIN code"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Post</label>
          <input
            type="text"
            name="post"
            value={formData.post}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            placeholder="Enter your post"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Landmark</label>
          <input
            type="text"
            name="landmark"
            value={formData.landmark}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            placeholder="Enter a nearby landmark"
            required
          />
        </div>
        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Payment Method</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            required
          >
            <option value="" disabled>Select payment method</option>
            <option value="creditCard">Credit Card</option>
            <option value="debitCard">Debit Card</option>
            <option value="netBanking">Net Banking</option>
            <option value="upi">UPI</option>
            <option value="cod">Cash on Delivery</option>
          </select>
        </div>
        <button
          type="submit"
          className="col-span-1 md:col-span-2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
    </>
  );
}

export default CheckOut;
