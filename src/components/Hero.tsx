import './Hero.css';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">ORQUESTA ELEGIDOS</h1>
          <p className="hero-subtitle">Versiones que hacen historia</p>
          <p className="hero-description">
            Rock, Pop, Reggaeton y más. La mejor música de autores españoles e internacionales
            para tus ferias y eventos privados.
          </p>
          <button className="btn btn-primary" onClick={() => scrollToSection('contacto')}>
            Contrátanos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
