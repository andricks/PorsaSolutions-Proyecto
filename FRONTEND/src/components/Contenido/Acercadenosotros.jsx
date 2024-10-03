import React from "react";
import '../Inicio/Header.css';
import '../Inicio/Footer.css';
import '../Inicio/MainContent.css';
import  './acercadenosotros.css'
const Acercadenosotros = ({ onLoginClick }) => {
  return (
    <div className="main-content">
      <header className="header">
        <nav className="navbar">
          <div className="navbar-brand">
            <a href="/">PORSA Solution’s</a>
          </div>
          <ul className="nav-links">
            <li><a href="/">Inicio</a></li>
            <li><a href="/nuestras-marcas">Nuestras Marcas</a></li>
            <li><a href="/talleres">Talleres</a></li>
            <li><a href="/Acercadenosotros">Acerca de Nosotros</a></li>
          </ul>
          <div className="nav-buttons">
            <button className="btn btn-primary" onClick={onLoginClick}>Iniciar Sesión</button>
          </div>
        </nav>
      </header>

      <div className="about-us-content">
        <section>
          <h2>Acerca de Nostros</h2>
          <p>
            PORSA Solution’s es una empresa en Jalapa, Guatemala,. 
            Este establecimiento ha estado en la comunidad jalapaneca por más de dos años, ofreciendo una amplia variedad 
            de servicios que van desde mantenimientos automotrices y venta de lubricantes  .
          </p>
          <p>
            La empresa inició hace más de dos años cuando uno de los propietarios fue engañado con lubricantes adulterados. 
            Esto llevó a la creación de PORSA Solution’s, con un enfoque en la venta de productos automotrices de calidad.
          </p>
        </section>

        <section>
          <h2>Crecimiento y Desarrollo</h2>
          <p>
            Con el tiempo, la empresa ha evolucionado, ampliando su gama de servicios y mejorando la infraestructura 
            para adaptarse a las necesidades de sus clientes.
          </p>
        </section>

        <section>
          <h2>Impacto en la Comunidad</h2>
          <p>
            PORSA Solution’s ha contribuido significativamente al desarrollo social y económico de Jalapa, creando empleo 
            y fortaleciendo la economía local. Su éxito es un ejemplo de cómo los negocios pueden crecer con integridad.
          </p>
        </section>

        <section>
          <h2>Servicios Ofrecidos</h2>
          <ul>
            <li>Mantenimientos de vehículos gasolina y diésel</li>
            <li>Centro de negocios con acceso a internet inalámbrico gratuito</li>
            <li>Venta de repuestos para vehículos</li>
            <li>Amplio estacionamiento</li>
          </ul>
        </section>

        <section>
          <h2>Ubicación y Horario</h2>
          <p>Dirección: Av. Chipilapa A 1-66, Zona 5 Jalapa Jalapa, Guatemala</p>
          <p>Horario de atención: Lunes a domingo, de 8:00 AM a 5:00 PM</p>
          <p><a href="https://maps.app.goo.gl/r1L6nD5KgiSd1xGk7">Ver en Google Maps</a></p>
        </section>

        <section>
          <h2>Misión y Visión</h2>
          <p><strong>Misión:</strong> Ser una empresa líder en la comercialización de productos automotrices de alta calidad.</p>
          <p><strong>Visión:</strong> Brindar la mejor calidad y atención a nuestros clientes, satisfaciendo todas sus necesidades.</p>
        </section>

        <section>
          <h2>Redes Sociales</h2>
          <p>
            Puedes seguirnos en nuestra página de Facebook para recibir actualizaciones: 
            <a href="https://www.facebook.com/profile.php?id=100083105143383"> Facebook PORSA Solution’s</a>
          </p>
        </section>
      </div>
    </div>
  );
}

export default Acercadenosotros;
