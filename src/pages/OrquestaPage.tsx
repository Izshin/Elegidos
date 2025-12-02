import { motion } from 'framer-motion';
import LaOrquesta from '../components/LaOrquesta';

const OrquestaPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
    >
      <LaOrquesta />
    </motion.div>
  );
};

export default OrquestaPage;
