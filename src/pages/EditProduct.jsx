import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    price: '',
    quantity: '',
  });

  useEffect(() => {
    axios.get(`https://grocery-repository.onrender.com/findProduct/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`https://grocery-repository.onrender.com/editProduct/${id}`, product);
    alert('Product updated!');
    navigate('/');
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Edit Product</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input name="name" value={product.name} onChange={handleChange} className="w-full border p-2" required />
        <input name="price" type="number" value={product.price} onChange={handleChange} className="w-full border p-2" required />
        <input name="quantity" type="number" value={product.quantity} onChange={handleChange} className="w-full border p-2" required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Update</button>
      </form>
    </div>
  );
};

export default EditProduct;
