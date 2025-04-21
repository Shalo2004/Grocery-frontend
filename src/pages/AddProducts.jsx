import React, { useState } from 'react';
import axios from 'axios';

const AddProducts = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    quantity: '',
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://grocery-repository.onrender.com/addProduct', product);


      alert('Product added successfully!');
      setProduct({ name: '', price: '', quantity: '' });
    } catch (err) {
      console.error(err);
      alert('Error adding product.');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Add Product</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input name="name" placeholder="Name" value={product.name} onChange={handleChange} className="border p-2 w-full" />
        <input name="price" placeholder="Price" value={product.price} onChange={handleChange} className="border p-2 w-full" />
        <input name="quantity" placeholder="Quantity" value={product.quantity} onChange={handleChange} className="border p-2 w-full" />
        <button type="submit" className="bg-green-500 text-white px-4 py-2">Add Product</button>
      </form>
    </div>
  );
};

export default AddProducts;
