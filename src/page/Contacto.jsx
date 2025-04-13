import React from 'react';
import '../styles/contacto.css';

const Contacto = () => {
  return (
    <section className="contacto-container">
      <h2>Contacto</h2>
      <form
        action="https://formsubmit.co/joseluisgregoretti@gmail.com"
        method="POST"
        className="contacto-form"
      >
        <input type="text" name="name" placeholder="Tu nombre" required />
        <input type="email" name="email" placeholder="Tu correo" required />
        <textarea name="message" rows="5" placeholder="Tu mensaje" required />
        <button type="submit">Enviar</button>

        {/* Opcionales para personalizar comportamiento */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="http://localhost:5173/gracias" />
      </form>
    </section>
  );
};

export default Contacto;
