import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddProducts from './pages/AddProducts';
import EditProduct from './pages/EditProduct';
import Home from './pages/Home';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddProducts />} />
        <Route path="/edit/:id" element={<EditProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
