import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/gracias.css'; // opcional

const Gracias = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 4000); // 4 segundos

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <section className="gracias-container">
      <h2>¡Gracias por contactarme!</h2>
      <p>Redirigiendo al inicio...</p>
    </section>
  );
};

export default Gracias;