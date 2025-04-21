import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center p-4 mt-8 border-t">
      <p>&copy; {new Date().getFullYear()} Grocery Store Management System</p>
    </footer>
  );
};

export default Footer;
