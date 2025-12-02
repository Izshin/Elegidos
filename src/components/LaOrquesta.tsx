import { motion } from 'framer-motion';
import { ChromaGrid } from './ChromaGrid';
import './LaOrquesta.css';

import { members } from '../data/members';

const LaOrquesta = () => {
  return (
    <section id="orquesta" className="la-orquesta">
      <div className="container">
        <motion.h3
          className="section-intro"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Conoce a los talentosos músicos que dan vida a Orquesta Elegidos
        </motion.h3>

        <ChromaGrid
          items={members}
          radius={350}
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
