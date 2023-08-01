import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Banner from './components/Banner';
import './App.css'; // Importa los estilos generales de la app

const App = () => {
  return (
    <div>
     <Navbar />
      <main className="content">
        <Banner />
        {/* Aquí puedes colocar otros componentes o contenido adicional */}
      </main>
      <Footer />
    </div>
  );
};

export default App;


