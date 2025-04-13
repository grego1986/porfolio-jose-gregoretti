import { useEffect, useState } from 'react';
import '../styles/Habilidades.css';
import { FaCode, FaDatabase, FaTools } from 'react-icons/fa';
import { SiSpringboot, SiReact } from 'react-icons/si';

const habilidades = {
  Lenguajes: [
    { nombre: 'Java', porcentaje: 80 },
    { nombre: 'C#', porcentaje: 60 },
    { nombre: 'HTML', porcentaje: 90 },
    { nombre: 'CSS', porcentaje: 70 },
    { nombre: 'JavaScript', porcentaje: 60 },
    { nombre: 'Sass', porcentaje: 60 },
    { nombre: 'Kotlin', porcentaje: 55 },
  ],

  'Frameworks / Librerías': [
    { nombre: 'Hibernate', porcentaje: 80 },
    { nombre: 'Spring Boot', porcentaje: 80 },
    { nombre: 'React', porcentaje: 50 },
    { nombre: 'Bootstrap', porcentaje: 75 },
  ],
  'Bases de Datos': [
    { nombre: 'MySQL', porcentaje: 70 },
    { nombre: 'SQLite', porcentaje: 60 },
  ],
  'Otras Tecnologías': [
    { nombre: 'GitHub', porcentaje: 80 },
    { nombre: 'Docker', porcentaje: 70 },
  ],
};

const iconos = {
    Lenguajes: <FaCode className="icono-categoria" />,
    'Frameworks / Librerías': <SiReact className="icono-categoria" />,
    'Bases de Datos': <FaDatabase className="icono-categoria" />,
    'Otras Tecnologías': <FaTools className="icono-categoria" />,
  };
  
const Habilidades = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    // Activar la animación al montar el componente
    setTimeout(() => setStartAnimation(true), 100);
  }, []);

  return (
    <div className="habilidades-container">
      <h2>Habilidades Técnicas</h2>
      <div className="columnas">
        {Object.entries(habilidades).map(([categoria, items]) => (
          <div className="columna" key={categoria}>
            <h3>{iconos[categoria]} {categoria}</h3>
            {items.map(({ nombre, porcentaje }) => (
              <div key={nombre} className="barra-habilidad">
                <span>{nombre}</span>
                <div className="barra-fondo">
                  <div
                    className="barra-relleno"
                    style={{
                      width: startAnimation ? `${porcentaje}%` : '0%',
                      transition: 'width 1s ease-out',
                    }}
                  >
                    <span className="porcentaje">{porcentaje}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Habilidades;


