import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import perfil from '../assets/perfil.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Necesario para el colapso en móvil

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <img
            src={perfil}
            alt="Foto de perfil"
            className="rounded-circle me-2 foto-perfil"
            style={{ width: '60px', height: '60px', objectFit: 'cover' }}
          />
          <span className="navbar-brand mb-0 h1 fs-3">José Luis Gregoretti</span>
        </div>

        {/* Botón hamburguesa */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links colapsables */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <div className="navbar-nav">
            <Link to="/" className="nav-link btn btn-outline-light me-2 mt-2 mt-lg-0">Inicio</Link>
            <Link to="/habilidades" className="nav-link btn btn-outline-light me-2 mt-2 mt-lg-0">Habilidades</Link>
            <Link to="/proyectos" className="nav-link btn btn-outline-light me-2 mt-2 mt-lg-0">Proyectos</Link>
            <Link to="/contacto" className="nav-link btn btn-outline-light mt-2 mt-lg-0">Contacto</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
