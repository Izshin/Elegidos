import './Footer.css';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate(); // Faltaba esto
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">

          {/* Sección Social */}
          <div className="footer-section section-social">
            <h4>Síguenos</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/orquesta.elegidos/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <img src={import.meta.env.BASE_URL + 'images/fb.svg'} alt="Facebook" className="social-icon" />
              </a>
              <a href="https://www.instagram.com/orquestaelegidos/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src={import.meta.env.BASE_URL + 'images/ig.svg'} alt="Instagram" className="social-icon" />
              </a>
            </div>
          </div>

          {/* Sección CTA */}
          <div className="footer-cta section-cta">
            <button 
              type="button" 
              className="btn-contratanos" 
              onClick={() => navigate('/contacto')}
            >
              Contrátanos
            </button>
          </div>

          {/* Sección Contacto */}
          <div className="footer-section section-contact">
            <h4>Contacto</h4>
            <p>Email: info@orquestaelegidos.com</p>
            <p>Tel: +34 600 123 456</p>
            <p>Andalucía, España</p>
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
