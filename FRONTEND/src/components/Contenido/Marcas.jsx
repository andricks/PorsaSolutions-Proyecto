import React from "react";
import '../Inicio/Header.css';
import '../Inicio/Footer.css';
import '../Inicio/MainContent.css';
import motulLogo from '../Contenido/imagenes/motul.jpg';
import castrolLogo from '../Contenido/imagenes/Castrol.jpg';
import valvolineLogo from '../Contenido/imagenes/valvule.jpg';
import './Marcas.css'
const Marcas = ({ onLoginClick }) => {
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

            <main>
                <section className="brand-section">
                    <h2>Nuestras Marcas de Lubricantes</h2>
                    <p>En nuestro taller trabajamos con las mejores marcas de aceites y lubricantes para el cuidado de tu vehículo, tanto para autos como para motos. A continuación, te presentamos algunas de las marcas con las que trabajamos:</p>
                    
                    <div className="brand-list">
                        <div className="brand-item">
                            <h3>Motul</h3>
                            <img src={motulLogo} alt="Motul Logo" className="brand-logo" />
                            <p>Motul es reconocida por su alta calidad y productos especializados en lubricantes para automóviles y motocicletas. Sus aceites están diseñados para maximizar el rendimiento y la protección del motor.</p>
                        </div>
                        <div className="brand-item">
                            <h3>Castrol</h3>
                            <img src={castrolLogo} alt="Castrol Logo" className="brand-logo" />
                            <p>Castrol ofrece una amplia gama de lubricantes avanzados para vehículos, desde aceites totalmente sintéticos hasta soluciones que optimizan la vida útil del motor y mejoran la eficiencia de combustible.</p>
                        </div>
                        <div className="brand-item">
                            <h3>Valvoline</h3>
                            <img src={valvolineLogo} alt="Valvoline Logo" className="brand-logo" />
                            <p>Valvoline es una de las marcas más antiguas en el mercado de lubricantes. Sus productos se enfocan en proporcionar una excelente protección para motores de alto rendimiento y vehículos comerciales.</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Marcas;

