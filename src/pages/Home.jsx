import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await axios.get('https://grocery-repository.onrender.com/viewProducts');
    setProducts(res.data);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure?')) {
      await axios.delete(`https://grocery-repository.onrender.com/deleteProduct/${id}`);
      fetchProducts(); // Refresh the list
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Stock List</h2>
      <Link to="/add" className="bg-green-500 text-white px-4 py-2 mb-4 inline-block rounded">Add New Product</Link>
      <table className="w-full mt-4 border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">Quantity</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(prod => (
            <tr key={prod._id}>
              <td className="p-2 border">{prod.name}</td>
              <td className="p-2 border">₹{prod.price}</td>
              <td className="p-2 border">{prod.quantity}</td>
              <td className="p-2 border space-x-2">
                <Link to={`/edit/${prod._id}`} className="text-blue-600">Edit</Link>
                <button onClick={() => handleDelete(prod._id)} className="text-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
