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
            <h4>Síguenos</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/orquesta.elegidos/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">Facebook</a>
              <a href="https://www.instagram.com/orquestaelegidos/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
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
