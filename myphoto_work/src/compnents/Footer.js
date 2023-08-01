import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <div className="container text-center">
        <p>© {new Date().getFullYear()} My Photo Work. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
