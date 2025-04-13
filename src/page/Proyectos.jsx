import Cards from '../components/Cards';
import '../styles/Proyectos.css';
import { FaJava, FaReact, FaDocker, FaHtml5, FaBootstrap, FaCss3 } from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiVite, SiThymeleaf, SiBootstrap } from 'react-icons/si';
import inicio from '../assets/sgp-inicio.png';
import nota from '../assets/sgp-ingresonota.png';
import busqueda from '../assets/sgp-busqueda.png';
import ver from '../assets/sgp-ver.png';
import home from '../assets/pfl-home.png';
import tecno from '../assets/pfl-tecno.png';
import project from '../assets/pfl-project.png';

const listaProyectos = [
  {
    nombre: 'Gestor de Expedientes',
    descripcion: 'Sistema web legislativo interno para gestión de expedientes. Corre en red privada.',
    detalles: ['Este proyecto fue desarrollado para digitalizar y optimizar el circuito administrativo de gestión de expedientes en un ámbito legislativo municipal. Permite la creación, seguimiento y tratamiento de expedientes a través de distintas áreas, integrando roles específicos como secretarios, concejales y administrativos.',
      'La aplicación está construida con Spring Boot, Thymeleaf, MySQL y Bootstrap, y asegura un flujo de trabajo ordenado mediante relaciones entre entidades, control de acceso por roles y una interfaz intuitiva para los usuarios.'],
    tecnologias: [<FaJava title="Java" />, <SiSpringboot title="Spring Boot" />, <SiMysql title="MySQL" />, <SiBootstrap title="Bootstrap" />,<FaCss3 title="css3"/>, <SiThymeleaf title="Thymeleaf" />, <FaDocker title="Docker" />],
    imagenes: [inicio, nota, busqueda, ver],
    repo: 'https://github.com/grego1986/consejo.git',
    demo: null
  },
  {
    nombre: 'Portfolio Web',
    descripcion: 'Sitio personal responsive para mostrar proyectos y habilidades.',
    detalles: ['Este portafolio fue desarrollado con el objetivo de reflejar mis conocimientos y habilidades en el desarrollo web. Utiliza tecnologías como React, Bootstrap y CSS personalizado, con un diseño responsive que se adapta a diferentes dispositivos.',
'Cada sección está pensada para destacar aspectos clave de mi perfil: quién soy, qué sé hacer, los proyectos que he realizado y cómo podés contactarme.',
'Las animaciones y transiciones sutiles aportan dinamismo sin perder claridad ni usabilidad. Además, la sección de habilidades muestra visualmente el dominio que tengo en cada tecnología.',
'Mi intención fue lograr una experiencia de navegación fluida, profesional y directa, ideal para que puedas conocerme tanto desde lo técnico como desde lo humano.',
'¡Gracias por tomarte el tiempo de explorarlo!'],
    tecnologias: [<FaReact title="React" />, <FaHtml5 title="html" />, <FaBootstrap title="Java" />, <FaCss3 title="css3"/>],
    imagenes: [home, tecno, project],
    repo: 'https://github.com/tuusuario/portfolio',
    demo: 'https://tuusuario.github.io/portfolio'
  },
  // Agregá más proyectos si querés
];

const Proyectos = () => {
  return (
    <section className="proyectos-section">
      <h2>Proyectos</h2>
      <div className="proyectos-grid">
        {listaProyectos.map((proyecto, index) => (
          <Cards key={index} proyecto={proyecto} />
        ))}
      </div>
    </section>
  );
};

export default Proyectos;
