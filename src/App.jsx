import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Proyectos from './page/Proyectos';
import Contacto from './page/Contacto';
import Habilidades from './page/Habilidades';
import Gracias from './page/Gracias';
import './styles/index.css';

function App() {

  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-fill">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/habilidades" element={<Habilidades />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/gracias" element={<Gracias />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App;
