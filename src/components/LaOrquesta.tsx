import { motion } from 'framer-motion';
import { ChromaGrid, type ChromaItem } from './ChromaGrid';
import './LaOrquesta.css';

const members: ChromaItem[] = [
  {
    image: '/images/Carlos.jpg',
    title: 'Carlos Espinosa',
    subtitle: 'Vocalista Principal',
    handle: 'Utrera, 1974',
    location: 'Coro Amistad de Utrera',
    borderColor: '#FFDABA',
    gradient: 'linear-gradient(145deg, #FF6200, #000000)'
  },
  {
    image: '/images/Antonio.jpg',
    title: 'Antonio Mofly',
    subtitle: 'Batería',
    handle: 'Utrera, 1972',
    location: 'Jazz & Flamenco',
    borderColor: '#FFDABA',
    gradient: 'linear-gradient(165deg, #823F00, #000000)'
  },
  {
    image: '/images/Jesuli.png',
    title: 'Jesuli González',
    subtitle: 'Guitarrista',
    handle: 'Utrera',
    location: 'Gran suli',
    borderColor: '#FFDABA',
    gradient: 'linear-gradient(195deg, #FF6200, #000000)'
  },
  {
    image: '/images/Kiko.png',
    title: 'Kiko',
    subtitle: 'Teclista',
    handle: 'Utrera',
    location: 'Tecladista Principal',
    borderColor: '#FFDABA',
    gradient: 'linear-gradient(210deg, #823F00, #000000)'
  },
  {
    image: '/images/Navas.jpg',
    title: 'Miguel Navas',
    subtitle: 'Vocalista',
    handle: 'El Rubio de Utrera, 1975',
    location: 'Pop & Flamenco',
    borderColor: '#FFDABA',
    gradient: 'linear-gradient(225deg, #FF6200, #000000)'
  },
  {
    image: '/images/Take.jpg',
    title: 'Sergio "Take"',
    subtitle: 'Bajista',
    handle: 'Utrera',
    location: 'Base Rítmica',
    borderColor: '#FFDABA',
    gradient: 'linear-gradient(135deg, #823F00, #000000)'
  }
];

const LaOrquesta = () => {
  return (
    <section id="orquesta" className="la-orquesta">
      <div className="container">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          La Orquesta
        </motion.h2>
        <motion.h3
          className="section-intro"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Conoce a los talentosos músicos que dan vida a Orquesta Elegidos
        </motion.h3>
        
        <ChromaGrid 
          items={members}
          radius={280}
          columns={3}
          damping={0.5}
          fadeOut={0.7}
          ease="power3.out"
        />
      </div>
    </section>
  );
};

export default LaOrquesta;
