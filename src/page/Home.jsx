import React from 'react';
import '../styles/home.css';
import perfil from '../assets/perfil.png';

function Home() {
    return (
        <div className="home-container">
            <div className="profile-image">
                <img src={perfil} alt="Foto de perfil" />
            </div>
            <div className="home-content">
                <h1>¡Hola! Soy José Luis Gregoretti</h1>
                <p className="titulo-profesional">Técnico Universitario en Tecnologías de Información</p>
                <p className="subtitle">Desarrollador Full Stack apasionado por crear soluciones digitales modernas</p>

                <section className="about">
                    <h2>Sobre mí</h2>
                    <p>
                        Soy desarrollador Full Stack con formación técnica y experiencia en mantenimiento de sistemas. Egresado de la Universidad Tecnológica Nacional, Facultad Regional Santa Fe, como Técnico Universitario en Tecnologías de Información.
                    </p>
                    <p>
                        Me apasiona enfrentar desafíos, aprender constantemente y construir soluciones digitales que generen un impacto positivo. Disfruto tanto del desarrollo backend como del diseño de interfaces intuitivas y funcionales.
                    </p>
                </section>

                {/* Acá podés seguir con habilidades, actitudes, etc. */}
            </div>
        </div>
    );
}

export default Home;
