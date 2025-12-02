import { motion } from 'framer-motion';
import Tour from '../components/Tour';

const TourPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
    >
      <Tour />
    </motion.div>
  );
};

export default TourPage;
