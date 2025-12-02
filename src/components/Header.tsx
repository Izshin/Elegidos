import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleLogoClick = (e: React.MouseEvent) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (location.pathname === '/') {
      e.preventDefault();
      const scrollContainer = document.querySelector('.home-scroll-container');
      if (scrollContainer) {
        scrollContainer.scrollTo({ top: 150, behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" onClick={handleLogoClick}>
            <img src={import.meta.env.BASE_URL + 'images/ElegidosLogo.png'} alt="Orquesta Elegidos" className="logo-img" />
            <motion.h1
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              ORQUESTA ELEGIDOS
            </motion.h1>
          </Link>

          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul>
              <li>
                <Link
                  to="/"
                  className={isActive('/') ? 'active' : ''}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/orquesta"
                  className={isActive('/orquesta') ? 'active' : ''}
                  onClick={() => setIsMenuOpen(false)}
                >
                  La Orquesta
                </Link>
              </li>
              <li>
                <Link
                  to="/tour"
                  className={isActive('/tour') ? 'active' : ''}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tour
                </Link>
              </li>
              <li>
                <Link
                  to="/noticias"
                  className={isActive('/noticias') ? 'active' : ''}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Noticias
                </Link>
              </li>
              <li>
                <Link
                  to="/contacto"
                  className={isActive('/contacto') ? 'active' : ''}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contáctanos
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
