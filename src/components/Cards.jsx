import { useState } from 'react';
import Modal from './Modal'; // 👈 Asegurate de que la ruta sea correcta
import '../styles/Cards.css';

const Cards = ({ proyecto }) => {
  const [index, setIndex] = useState(0);
  const [mostrarModal, setMostrarModal] = useState(false); // Estado para el modal

  const siguiente = () => {
    setIndex((index + 1) % proyecto.imagenes.length);
  };

  const anterior = () => {
    setIndex((index - 1 + proyecto.imagenes.length) % proyecto.imagenes.length);
  };

  return (
    <>
      <div className="card-proyecto">
        <div className="carrusel">
          <img
            src={proyecto.imagenes[index]}
            alt={`Captura ${index + 1}`}
            className="imagen-carrusel"
          />
          {proyecto.imagenes.length > 1 && (
            <>
              <button className="prev" onClick={anterior}>◀</button>
              <button className="next" onClick={siguiente}>▶</button>
            </>
          )}
        </div>

        <div className="contenido">
          <h3>{proyecto.nombre}</h3>
          <p>{proyecto.descripcion}</p>
          <div className="tecnologias">
            {proyecto.tecnologias.map((tec, i) => (
              <span key={i}>{tec}</span>
            ))}
          </div>
          <div className="botones">
            {proyecto.repo && <a href={proyecto.repo} target="_blank">Repositorio</a>}
            {proyecto.demo && <a href={proyecto.demo} target="_blank">Demo</a>}
            <button className="btn-info" onClick={() => setMostrarModal(true)}>+ Info</button>
          </div>
        </div>
      </div>

      {/* Modal de detalles */}
      <Modal
        isOpen={mostrarModal}
        onClose={() => setMostrarModal(false)}
        titulo={proyecto.nombre}
        descripcion={proyecto.detalles || 'Aquí podrías agregar más información sobre este proyecto.'}
      />
    </>
  );
};

export default Cards;