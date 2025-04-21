import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 mb-4 flex justify-between">
      <h1 className="text-xl font-semibold">Grocery Stock Manager(URK22CS1164)</h1>
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
      </nav>
    </header>
  );
};

export default Header;
