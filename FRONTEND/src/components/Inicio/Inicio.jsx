import React from 'react';
import './MainContent.css';
import './Footer.css';
import './Header.css';
import logo from './aaa.jpg';

const Inicio = ({ onLoginClick }) => {
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

      <section className="hero-section">
        <div className="hero-content">
          
          <img src={logo} alt="PORSA Solution’s Logo" className="navbar-logo" />
          <p >Historial de Registro automotriz</p>
          <div className="cta-buttons">
            <a href="/Usuario" className="btn btn-primary">Ingrese Numero de placa</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <div className="footer-section">
              <h4>Enlaces Rápidos</h4>
              <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="https://www.facebook.com/profile.php?id=100083105143383">Facebook</a></li>
                <li><a href="https://api.whatsapp.com/send?phone=%2B50254452339&context=ARBwf9_tIAKS-w-e6Mqo8nse8Q_exLO7xf5ZwHziWOZsJ_w-49m0aZey8Kmlju7JYmO5B-mV8kQg2qpMYpEEolvyE40o2Nxnq5Xq96ixvTaxKMxFZUJwaIo39VVWFyNjCCIqplMP5vVczTx6e7bWwbXPmg&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwY2xjawFgrKhleHRuA2FlbQIxMAABHRNWQDC7XcZT9L6MVkfBMiCqp4SwF850rIvDeMoy4B5ClopFXkAg_dlgdQ_aem_Lvk50-Wte9DOCaUCEk02Zw">Watssap</a></li>
                <li><a href="/about">Acerca de Nosotros</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Síguenos</h4>
              <ul className="social-links">
                <li><a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a></li>
                <li><a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a></li>
                <li><a href="https://www.youtube.com"><i className="fab fa-youtube"></i></a></li>
                <li><a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="footer-column">
            <div className="footer-section">
              <h4>Contáctanos</h4>
              <p>Av. Chipilapa A 1-66, Zona 5 Jalapa Jalapa </p>
              <p>Teléfono: 502 54452339</p>
              <p>Email: porsasolutions@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} PORSA Solution’s. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Inicio;
