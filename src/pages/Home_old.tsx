import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import './Home.css';

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <motion.section
      ref={containerRef}
      id="inicio"
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="home-image-parallax"
        style={{ y: imageY }}
      >
        <img src="/images/Orquesta landing.jpg" alt="Orquesta Elegidos" />
      </motion.div>

      <motion.div className="home-overlay" style={{ y: contentY }}>
        <div className="container">
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
            ELEGIDOS
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
              onClick={() => window.location.href = '/contacto'}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
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
              viewport={{ once: true }}
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
              viewport={{ once: true }}
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
              viewport={{ once: true }}
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
              viewport={{ once: true }}
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
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Home;
