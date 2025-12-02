import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ORQUESTA ELEGIDOS</h3>
            <p>La mejor música de autores españoles e internacionales para tus eventos.</p>
          </div>

          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/orquesta">La Orquesta</Link></li>
              <li><Link to="/tour">Tour</Link></li>
              <li><Link to="/noticias">Noticias</Link></li>
              <li><Link to="/contacto">Contáctanos</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Síguenos</h4>
            <div className="social-links">
              <a href="#" aria-label="Facebook">Facebook</a>
              <a href="#" aria-label="Instagram">Instagram</a>
              <a href="#" aria-label="YouTube">YouTube</a>
              <a href="#" aria-label="Twitter">Twitter</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Contacto</h4>
            <p>Email: info@orquestaelegidos.com</p>
            <p>Tel: +34 600 123 456</p>
            <p>Madrid, España</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Orquesta Elegidos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
