import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const images = [
    import.meta.env.BASE_URL + 'images/Orquesta-landing.jpg',
    import.meta.env.BASE_URL + 'images/Orquesta-landing2.jpg',
    import.meta.env.BASE_URL + 'images/Orquesta-landing3.jpg',
    import.meta.env.BASE_URL + 'images/Orquesta-landing4.jpg',
    import.meta.env.BASE_URL + 'images/Orquesta-landing-5.jpg',
    import.meta.env.BASE_URL + 'images/Orquesta-landing-ultima-foto.jpg'
  ];

  useEffect(() => {
    // Scroll inicial
    if (containerRef.current) {
      containerRef.current.scrollTop = 125;
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrollPosition = containerRef.current.scrollTop;
      const maxScroll = containerRef.current.scrollHeight - containerRef.current.clientHeight;
      const scrollPercentage = scrollPosition / maxScroll;

      // La última imagen solo se muestra al final (cuando se ve el botón de contratanos)
      // Usamos un umbral alto (0.9) para reservar la última foto para el final
      const threshold = 0.92;
      let imageIndex;

      if (scrollPercentage > threshold) {
        imageIndex = images.length - 1;
      } else {
        // Repartir el resto del scroll entre las otras imágenes (todas menos la última)
        const adjustedPercentage = scrollPercentage / threshold;
        const mainImagesCount = images.length - 1;

        imageIndex = Math.min(
          Math.floor(adjustedPercentage * mainImagesCount),
          mainImagesCount - 1
        );
      }

      setCurrentImageIndex(imageIndex);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [images.length]);

  return (
    <motion.section
      id="inicio"
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="home-background-images">
        {images.map((src, index) => (
          <motion.div
            key={src}
            className={`home-background-image ${index === currentImageIndex ? 'active' : ''}`}
            style={{
              backgroundImage: `url("${src}")`,
              zIndex: index
            }}
            initial={{ y: index === 0 ? 0 : '100%' }}
            animate={{ y: index <= currentImageIndex ? 0 : '100%' }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          />
        ))}
      </div>

      <div ref={containerRef} className="home-scroll-container">
        <div className="home-content-wrapper">
          <motion.div
            className="home-hero"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="home-title"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              ORQUESTA ELEGIDOS
            </motion.h1>

            <motion.h2
              className="home-subtitle"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Versiones que hacen historia
            </motion.h2>

            <motion.button
              className="btn btn-primary"
              onClick={() => navigate('/contacto')}
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                scale: [1, 1.05, 1]
              }}
              transition={{
                y: { duration: 0.6, delay: 0.8 },
                opacity: { duration: 0.6, delay: 0.8 },
                scale: {
                  repeat: Infinity,
                  duration: 2.5,
                  ease: "easeInOut",
                  delay: 0
                }
              }}
              whileHover={{
                scale: 1.08,
                transition: { duration: 0 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contrátanos
            </motion.button>
          </motion.div>

          <motion.div
            className="home-content-sections"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.div
              className="content-left"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, root: containerRef }}
            >
              <h3>Ferias de Andalucía</h3>
              <p>
                Desde las calles de Utrera hasta la Feria de Abril de Sevilla,
                Orquesta Elegidos ha sido protagonista en las casetas más emblemáticas
                de Andalucía. Nuestra versatilidad nos ha llevado a amenizar la Feria
                de Dos Hermanas, la Velá de Santiago en Jerez y las fiestas patronales
                de Lebrija. Con más de una década de experiencia, conocemos el ritmo
                exacto que necesita cada momento festivo.
              </p>
            </motion.div>

            <motion.div
              className="content-right"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, root: containerRef }}
            >
              <h3>Eventos Privados</h3>
              <p>
                Bodas inolvidables, celebraciones corporativas y fiestas privadas
                son nuestro sello distintivo. Hemos tocado en cortijos señoriales
                de la campiña sevillana, hoteles de cinco estrellas en Marbella y
                haciendas con encanto en toda Andalucía. Adaptamos nuestro repertorio
                a cada cliente, fusionando rock, pop y reggaeton para crear la
                atmósfera perfecta en tu evento especial.
              </p>
            </motion.div>

            <motion.div
              className="content-left"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, root: containerRef }}
            >
              <h3>Nuestro Sonido</h3>
              <p>
                Rock, pop, reggaeton y los mejores éxitos de autores españoles e
                internacionales. Desde los clásicos de Los Chichos y Los Chunguitos
                hasta los hits más actuales de Bad Bunny y Rosalía, nuestro repertorio
                es una explosión de energía que mantiene la pista llena durante toda
                la noche. Versiones únicas con arreglos propios que dan un toque
                especial a cada canción.
              </p>
            </motion.div>

            <motion.div
              className="content-right"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, root: containerRef }}
            >
              <h3>Experiencia Profesional</h3>
              <p>
                Con equipamiento de última generación y un equipo técnico experimentado,
                garantizamos un sonido impecable en cualquier espacio. Hemos actuado
                ante más de 10,000 personas en plazas de toros, así como en eventos
                íntimos de 50 invitados. Nuestra pasión por la música y el
                entretenimiento se refleja en cada actuación, creando momentos
                memorables que perduran en el tiempo.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="home-cta-footer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, root: containerRef }}
          >
            <motion.h3
              className="cta-slogan"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, root: containerRef }}
            >
              Disfruta del arte y la buena música en directo 
            </motion.h3>
            <motion.button
              className="btn btn-cta-large"
              onClick={() => navigate('/contacto')}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, root: containerRef }}
              animate={{
                scale: [1, 1.05, 1]
              }}
              transition={{
                default: { duration: 0.1 },
                scale: {
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut"
                }
              }}
              whileHover={{
                scale: 1.08,
                backgroundColor: '#FFDABA',
                color: '#000000',
                boxShadow: '0 10px 40px #FFDABA',
                transition: {
                  duration: 0.2,
                  color: { duration: 0.1 }
                }
              }}
              whileTap={{ scale: 0.98 }}
            >
              Contrátanos
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
