import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="redes">
        <a href="https://github.com/grego1986" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/gregodev" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="mailto:joseluisgregoretti@gmail.com">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
      <p className="copyright">
        © {new Date().getFullYear()} Gregoretti - Todos los derechos reservados
      </p>
    </footer>
  );
};

export default Footer;
