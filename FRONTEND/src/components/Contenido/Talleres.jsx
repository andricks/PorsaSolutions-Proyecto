import React from "react";
import '../Inicio/Header.css';
import '../Inicio/Footer.css';
import '../Inicio/MainContent.css';
import acitefiltro from '../Contenido/imagenes/acitefiltro.jpeg'; 
import Balanceo  from '../Contenido/imagenes/alineacion-llantas-imagen-articulo.jpg'
import Frenos from '../Contenido/imagenes/frenos.jpg'; 
import Bateria from '../Contenido/imagenes/bateria.jpg'; 
import './taller.css'
const Talleres = ({ onLoginClick }) => {
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
                <section className="taller-section">
                    <h2>Servicios de Mantenimiento Preventivo</h2>
                    <p>En nuestro taller, nos especializamos en ofrecer servicios de mantenimiento preventivo para garantizar que tu vehículo siempre esté en las mejores condiciones. Nuestros servicios están diseñados para prevenir fallos mecánicos y prolongar la vida útil de tu vehículo.</p>
                    
                    <div className="service-list">
                        <div className="service-item">
                            <h3>Cambio de Aceite y Filtros</h3>
                            <img src={acitefiltro } alt="Cambio de Aceite" className="service-logo" />
                            <p>Utilizamos aceites de alta calidad como Motul para garantizar un rendimiento óptimo del motor. Recomendamos cambiar el aceite cada 5,000 kilómetros o según las indicaciones del fabricante.</p>
                        </div>
                        <div className="service-item">
                            <h3>Alineación y Balanceo</h3>
                            <img src={Balanceo } alt="Cambio de Aceite" className="service-logo" />
                            <p>Mantenemos tu vehículo alineado y balanceado para garantizar un manejo seguro y prolongar la vida útil de las llantas.</p>
                        </div>
                        <div className="service-item">
                            <h3>Revisión de Frenos</h3>
                            <img src={Frenos } alt="Cambio de Aceite" className="service-logo" />
                            <p>Revisamos y reemplazamos pastillas de freno, discos y líquido de frenos para asegurar un frenado eficaz en todo momento.</p>
                        </div>
                        <div className="service-item">
                            <h3>Inspección de Batería</h3>
                            <img src={Bateria } alt="Cambio de Aceite" className="service-logo" />
                            <p>Realizamos una prueba de carga para verificar el estado de la batería y reemplazarla si es necesario, garantizando un encendido fiable del motor.</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Talleres;